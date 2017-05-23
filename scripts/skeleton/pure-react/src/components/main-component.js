import React from 'react';
import Child1 from './child1.js';
import Child2 from './child2.js';
import Child3 from './child3.js';
export default class Header extends React.Component{

	componentWillMount(){
		console.log("COMPONENT WILL MOUNT!");
	}

	componentDidMount(){
		console.log("COMPONENT DID MOUNT!");
	}

	shouldComponentUpdate(){
		console.log("SHOULD COMPONENT UPDATE!");
	}

	componentDidUpdate(){
		console.log("COMPONENT DID UPDATE!");
	}

	render(){
		console.log("COMPONENT RENDERS!");
		return( 
			<div className="main-component">
				<h2>This is the main component which will take other child components</h2>
				<Child1 />
				<Child2 />
				<Child3 />
			</div>
		);
	}
};