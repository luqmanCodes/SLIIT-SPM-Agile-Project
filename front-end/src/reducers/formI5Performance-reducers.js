import { SUBMIT_PERFORMANCE_TABLE, SUCCESS_VALIDATION_PERFORMANCE, FAILURE_VALIDATION_PERPORMANCE } from '../actions/action-types';

const initialState = {

};

export default function(state = initialState, action) {
    switch(action.type) {
        case SUBMIT_PERFORMANCE_TABLE:
            return {
                ...state,
                performaneceData: action.payload,
            }
        case SUCCESS_VALIDATION_PERFORMANCE:
            return {
                ...state,
                validation: action.payload,
            }
        case FAILURE_VALIDATION_PERPORMANCE:
            return {
                ...state,
                validation: action.payload,
            }
        default:
            return state;
    }
}