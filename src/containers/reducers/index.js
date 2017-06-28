import { combineReducers } from 'redux';
import CardContainerReducer from './cardContainerReducer';
const rootReducer = combineReducers({
    CardContainerPage: CardContainerReducer
});

export default rootReducer;