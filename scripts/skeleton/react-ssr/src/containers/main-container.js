import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getData  from '../actions/main-component.js';
import mainComponent from '../components/main-component.js';

function mapStateToProps(state){

    let {feeling} = state.mainComponentReducers;

    return{
       feeling: feeling 
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
       getData: getData
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(mainComponent);