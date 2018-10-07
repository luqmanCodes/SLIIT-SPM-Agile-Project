import { SUBMIT_OVERALL, SUCCESS_VALIDATION_OVERALL, FAILURE_VALIDATION_OVERALL } from './action-types';

// export const fetchData = () => dispatch => {
//     dispatch({
//         type: FETCH_DATA,
//         payload: 'value',
//     });
// }

export const submitOverAll = (formValue) => dispatch => {
    dispatch({
        type: SUBMIT_OVERALL,
        payload: formValue, //give the corrent output 
    });
}

export const validation_failure = () => dispatch => {
    dispatch({
        type: FAILURE_VALIDATION_OVERALL,
        payload: false,
    });
}

export const validation_success = () => dispatch => {
    dispatch({
        type: SUCCESS_VALIDATION_OVERALL,
        payload: true,
    });
}