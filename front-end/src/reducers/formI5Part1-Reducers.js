import { FETCH_DATA, SUBMIT_PART, SUCCESS_VALIDATION_PART1, FAILURE_VALIDATION_PART1 } from './action-types';

const initialState = {
    studentId: '',
    studentName: '',
    detailsPart1 : []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                studentId: payload,
                studentName: payload,
            }
        case SUBMIT_PART:
            return{
                ...state,
                detailsPart1: payload,
            }
        case SUCCESS_VALIDATION_PART1:
            return {
                ...state,
                detailsPart1: payload,
            }
        case FAILURE_VALIDATION_PART1:
            return {
                ...state,
                detailsPart1: payload,
            }
        default: 
            return state;
    }
}