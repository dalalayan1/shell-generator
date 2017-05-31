import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import Maincomponent from './containers/main-container.js';

const store=configureStore();

render(
	<Provider store={store}>
		<Maincomponent />
	</Provider>,
	document.getElementById('app-root')
	);