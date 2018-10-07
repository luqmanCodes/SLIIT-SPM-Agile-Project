import { SUBMIT_HABIT_TABLE, SUCCESS_VALIDATION_HABIT, FAILURE_VALIDATION_HABIT } from './action-types';

export const submitHabitData = (formValue) => dispatch => {
    dispatch({
        type: SUBMIT_HABIT_TABLE,
        payload: formValue,
    })
}

export const validation_success = () => dispatch => {
    dispatch({
        type: SUCCESS_VALIDATION_HABIT,
        payload: true,
    });
}

export const validation_failure = () => dispatch => {
    dispatch({
        type: FAILURE_VALIDATION_HABIT,
        payload: false,
    });
}