import {combineReducers} from 'redux';

import menuReducer from './Menu/reducer';

const rootReducer = combineReducers({menuReducer})

export default rootReducer;