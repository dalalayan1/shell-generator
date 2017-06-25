import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';

import configureStore from './store/configureStore';

import Maincomponent from './containers/main-container.js';

let state = null;
if ( window.$REDUX_STATE ) {

	// 解開 server 預先傳來的資料包，稍後會放入 store 成為 initState
	state = window.$REDUX_STATE;
}

const store=configureStore(state);

render(
	<Provider store={store}>
	<BrowserRouter>
		<div>
			<Route exact={true} path="/" render = {() => (
				<div>
					<Maincomponent/>
					<h1>Hey wasup? Hope you guys are enjoying our presentation!</h1>
				</div>
					
			)} />
		</div>
	</BrowserRouter>
	</Provider>,
	document.getElementById('app-root')
	);