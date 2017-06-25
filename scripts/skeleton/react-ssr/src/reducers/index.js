import { combineReducers } from 'redux';

import mainComponentReducers from './main-component.js';

const rootReducer = combineReducers({
    mainComponentReducers
});

export default rootReducer;