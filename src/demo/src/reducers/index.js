import { combineReducers } from 'redux';
import CardContainerReducer from './CardContainer-reducer';
const rootReducer = combineReducers({
  CardContainerPage: CardContainerReducer
});

export default rootReducer;
