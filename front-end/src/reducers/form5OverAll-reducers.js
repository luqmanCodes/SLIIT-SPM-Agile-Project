import { SUBMIT_OVERALL, SUCCESS_VALIDATION_OVERALL, FAILURE_VALIDATION_OVERALL } from '../actions/action-types';

const initialState = {

}

export default function(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_OVERALL:
            return{
                ...state,
                overAllDetails: action.payload,
            }
        case SUCCESS_VALIDATION_OVERALL:
            return {
                ...state,
                valitation: action.payload,
            }
        case FAILURE_VALIDATION_OVERALL:
            return {
                ...state,
                valitation: action.payload,
            }
        default: 
            return state;
    }
}