import { FETCH_DATA, SUBMIT_PART1, SUCCESS_VALIDATION_PART1, FAILURE_VALIDATION_PART1 } from './action-types';

export const fetchData = () => dispatch => {
    dispatch({
        type: FETCH_DATA,
        payload: 'value',
    });
}

export const submitPart1 = formValue => dispatch => {
    dispatch({
        type: SUBMIT_PART1,
        payload: formValue, //give the corrent output 
    });
}

export const validation_failure = () => dispatch => {
    dispatch({
        type: FAILURE_VALIDATION_PART1,
        payload: false,
    });
}

export const validation_success = () => dispatch => {
    dispatch({
        type: SUCCESS_VALIDATION_PART1,
        payload: true,
    });
}