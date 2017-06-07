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
			response: null,
			loader: null
		}
	}

	fetchData(e){
		e.preventDefault();
		this.setState({loader:true});
		this.props.getData('https://api.myjson.com/bins/1787vh');
	}

	updateView(data){
		console.log('data ',data);
		this.setState({
			response : data
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
		if(nextprops.feeling ){
			this.updateView(nextprops.feeling);
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
						<h4><i>{this.state.response && this.state.response.feeling}</i></h4>
					</div>;
		const error = <div>Sorry! we are numb...:(</div>;
		const loader = <h3 style={startLoader}>Loading...</h3>;
		const displayDetails = (this.state.response==null)?loader:data;
		
		return( 
			<div className="main-component">
				<h2>Hey we know you guys are actually enjoying it ;)</h2>
				<h2>In that case, you might want to : </h2>
				<Child1 />
				<Child2 />
				<Child3 />
                <button onClick={this.fetchData}>HOW DO WE FEEL?</button>
				{this.state.loader && displayDetails}
			</div>
		);
	}
}