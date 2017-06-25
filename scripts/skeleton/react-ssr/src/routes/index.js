import React from 'react'
import { Route } from 'react-router'
import mainComponent from '../components/main-component.js';

export default (

  <Route component={mainComponent}>

	<Route path="/"
		   components={<div>Main</div>} />

	<Route path="*"
		   components={<div>NotFound</div>} />
  </Route>

)