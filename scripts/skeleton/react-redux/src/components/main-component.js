import React from 'react';
import Child1 from './child1.js';
import Child2 from './child2.js';
import Child3 from './child3.js';

export default class mainComponent extends React.Component{

	constructor(props){
		super(props);
		this.fetchData = this.fetchData.bind(this);
		this.updateView = this.updateView.bind(this);
		this.state = {
			details: null,
			loader: null
		}
	}

	fetchData(e){
		e.preventDefault();
		this.setState({loader:true});
		this.props.getData('https://api.myjson.com/bins/mwnu9');
	}

	updateView(data){
		this.setState({
			details : data
		});
	}

	componentWillMount(){
		console.log("COMPONENT WILL MOUNT!");
	}

	componentDidMount(){
		console.log("COMPONENT DID MOUNT!");
		
	}

	componentWillReceiveProps(nextprops){
		console.log("COMPONENT WILL RECIEVE PROPS!");
		if(nextprops.details ){
			this.updateView(nextprops.details);
		}
	}

	shouldComponentUpdate(){
		console.log("SHOULD COMPONENT UPDATE!");
		return true;
	}

	componentWillUpdate(){
		console.log("COMPONENT WILL UPDATE!");
		
	}

	componentDidUpdate(){
		console.log("COMPONENT DID UPDATE!");
	}

	render(){
		console.log("COMPONENT RENDERS!",this.state);

		let startLoader = {
			visibility : (!this.state.loader)?'visible':'hidden'
		};
		const data = <div className="details">
						<h3>DETAILS : </h3>
						<p>NAME : {this.state.details && this.state.details.name}</p>
						<p>COMPANY : {this.state.details && this.state.details.company}</p>
					</div>;
		const error = <div>Sorry! data not found...:(</div>;
		const loader = <h3 style={startLoader}>Loading...</h3>;
		const displayDetails = (this.state.details==null)?loader:data;
		
		return( 
			<div className="main-component">
				<h2>This is the main component which will take other child components</h2>
				<Child1 />
				<Child2 />
				<Child3 />
                <button onClick={this.fetchData}>FETCH DATA</button>
				{this.state.loader && displayDetails}
			</div>
		);
	}
}