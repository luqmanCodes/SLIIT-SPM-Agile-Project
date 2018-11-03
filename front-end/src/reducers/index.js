import { combineReducers } from 'redux';
//import redurers and combine it
import formPart1Reducer from './formI5Part1-reducers';
import performanceTableReducer from './formI5Performance-reducers';
import habitTableReducer from './form5Habit-reducers';
import otherDetailsReducer from './form5OtherDetails-reducers';

export default combineReducers({
    formPart1: formPart1Reducer,
    performanceTable: performanceTableReducer,
    habitTable: habitTableReducer,
    otherDetail: otherDetailsReducer,
});