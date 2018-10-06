import { SUBMIT_HABIT_TABLE, SUCCESS_VALIDATION_HABIT, FAILURE_VALIDATION_HABIT } from '../actions/action-types';

const initialState = {

};

export default function(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_HABIT_TABLE:
            return {
                ...state,
                habitData: action.payload,
            }
        case SUCCESS_VALIDATION_HABIT:
            return {
                ...state,
                validation: action.payload,
            }
        case FAILURE_VALIDATION_HABIT:
            return {
                ...state,
                validation: action.payload,
            }
        default:
            return state;
    }
}