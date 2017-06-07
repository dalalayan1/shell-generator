import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';

import configureStore from './store/configureStore';

import Maincomponent from './containers/main-container.js';

const store=configureStore();

render(
	<BrowserRouter>
		<div>
			<Route exact={true} path="/" render = {() => (
					<h1>Hey wasup? Hope you guys are enjoying our presentation!</h1>
			)} />
			<Route path="/dummy" render = {() => (
					<Provider store={store}>
						<Maincomponent/>
					</Provider>
			)}/>
		</div>
	</BrowserRouter>,
	document.getElementById('app-root')
	);