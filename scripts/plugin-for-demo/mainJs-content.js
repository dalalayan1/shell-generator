const contents = 
`
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter,Route,Link } from 'react-router-dom';
 
import configureStore from './store/configureStore';
import configureStoreDemo from './demo/src/store/configureStore';

import Maincomponent from './containers/main-container.js';
import Democomponent from './demo/src/App';

const store=configureStore();
const storeDemo=configureStoreDemo();

render(
	
		<BrowserRouter>
		<div>
		<Route exact={true} path="/" render = {() => (
				<Provider store={store}>
					<Maincomponent/>
				</Provider>
		)} />
		
		<Route path="/demo" render = {() => (
				<Provider store={storeDemo}>
					<Democomponent/>
				</Provider>
		)}/>
		</div>
		</BrowserRouter>
	,
	document.getElementById('app-root')
	);`;

module.exports = contents;