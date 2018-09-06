import * as types from '../actions/action-types';

const initialState = {
    form : {
        name : null,
        detail1 : null,
        detail2 : null,
        detail3 : null
    }
};

const formReducer = function (state = initialState, action) {
    
    switch(action.types) {

        case types.FORM_ADDED:
            return Object.assign({}, state, {
                name : null,
                detail1 : null,
                detail2 : null,
                detail3 : null
            });

        case types.FORM_DENIED:
            return Object.assign({},state,{loginPending:true});

        default:
            return state;
    }
}

export default formReducer;