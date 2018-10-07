import { FETCH_DATA, SUBMIT_PART1, SUCCESS_VALIDATION_PART1, FAILURE_VALIDATION_PART1 } from '../actions/action-types';

const initialState = {
    studentId: 'IT16159518',
    studentName: 'Suhail',
    detailsPart1 : []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                studentId: 'IT16159518',
                studentName: 'Suhail',
            }
        case SUBMIT_PART1:
            return{
                ...state,
                basicFormDetails: action.payload,
            }
        case SUCCESS_VALIDATION_PART1:
            return {
                ...state,
                valitation: action.payload,
            }
        case FAILURE_VALIDATION_PART1:
            return {
                ...state,
                valitation: action.payload,
            }
        default: 
            return state;
    }
}