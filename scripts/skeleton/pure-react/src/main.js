import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter,Route } from 'react-router-dom';

import MainComponent from './components/main-component.js';

render(<BrowserRouter>
		<div>
			<Route exact={true} path="/" render = {() => (
					<h1>Hey wasup? Hope you guys are enjoying our presentation!</h1>
			)} />
			<Route path="/dummy" component={MainComponent}/>
		</div>
	</BrowserRouter>, 
    document.getElementById('app-root')
    );