import { SUBMIT_PERFORMANCE_TABLE, SUCCESS_VALIDATION_PERFORMANCE, FAILURE_VALIDATION_PERPORMANCE } from './action-types';

export const submitPerformanceLevel = (formValue) => dispatch => {
    dispatch({
        type: SUBMIT_PERFORMANCE_TABLE,
        payload: formValue,
    })
}

export const validation_success = () => dispatch => {
    dispatch({
        type: SUCCESS_VALIDATION_PERFORMANCE,
        payload: true,
    });
}

export const validation_failure = () => dispatch => {
    dispatch({
        type: FAILURE_VALIDATION_PERPORMANCE,
        payload: false,
    });
}