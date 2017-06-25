const path = require('path');
const fs = require('fs');
const express = require('express');

import React from 'react'
import { renderToString } from 'react-dom/server'

import { Router, RouterContext, match } from 'react-router';
import routes from './src/routes/index.js';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';


import rootReducer from './src/reducers/index.js';

const finalCreateStore = applyMiddleware()( createStore );

const app = express();
app.use('/', express.static(__dirname + '/static'));

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.ssr')
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: "/static/" }))
app.use(webpackHotMiddleware(compiler))

app.use( ( req, res, next ) => {
	
    const store = finalCreateStore(rootReducer);

	match( {routes, location: req.url}, ( error, redirectLocation, renderProps ) => {

		if ( error )
			return res.status(500).send( error.message );

		if ( redirectLocation )
			return res.redirect( 302, redirectLocation.pathname + redirectLocation.search );

		if ( renderProps == null ) {
			return res.status(404).send( 'Not found' );
		}



			const initView = renderToString((
				<Provider store={store}>
				  <RouterContext {...renderProps} />
				</Provider>
			))


			let state = JSON.stringify( store.getState() );

			let page = renderFullPage( initView, state )
			res.status(200).send(page)
			



	})

    
})

function renderFullPage(html, initialState) {
  return `
	<!doctype html>
	<html lang="utf-8">
	  <head>
		<title>Universal Redux Example</title>
		<link rel="shortcut icon" type="image/png" href="assets/images/react.png">
		<link rel="stylesheet" href="/assets/css/uikit.almost-flat.min.css">
	  </head>
	  <body>
	  <div class="container" id="app-root">${html}</div>
		<script>window.$REDUX_STATE = ${initialState}</script>
		<script src="/static/bundle.js"></script>
	  </body>
	</html>
	`
}

app.get('*', function(req, res) {
	res.status(404).send('Server.js > 404 - Page Not Found');
})

app.use((err, req, res, next) => {
  console.error("Error on request %s %s", req.method, req.url);
  console.error(err.stack);
  res.status(500).send("Server error");
});

process.on('uncaughtException', evt => {
  console.log( 'uncaughtException: ', evt );
})

app.listen(7001, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:7001');
});

