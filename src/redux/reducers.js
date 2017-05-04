import { combineReducers } from 'redux';
import {Index} from '../scence/Index/reducer.js';
import {About} from '../scence/About/reducer.js';

 const  rootReducer = combineReducers({
	Index,
  About
});

export default rootReducer;
