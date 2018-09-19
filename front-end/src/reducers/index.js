import { combineReducers } from 'redux';
//import redurers and combine it
import formPart1Reducer from './formI5Part1-Reducers';

export default combineReducers({
    formPart1: formPart1Reducer
});