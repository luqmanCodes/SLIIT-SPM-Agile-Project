import { SUBMIT_OTHER_DETAILS, SUCCESS_VALIDATION_OTHERDETAILS, FAILURE_VALIDATION_OTHERDETAILS } from './action-types';

// export const fetchData = () => dispatch => {
//     dispatch({
//         type: FETCH_DATA,
//         payload: 'value',
//     });
// }

export const submitOtherDetails = (formValue) => dispatch => {
    dispatch({
        type: SUBMIT_OTHER_DETAILS,
        payload: formValue, //give the corrent output 
    });
}

export const validation_failure = () => dispatch => {
    dispatch({
        type: FAILURE_VALIDATION_OTHERDETAILS,
        payload: false,
    });
}

export const validation_success = () => dispatch => {
    dispatch({
        type: SUCCESS_VALIDATION_OTHERDETAILS,
        payload: true,
    });
}