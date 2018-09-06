import * as types from '../actions/action-types';

export function addForm(name, detail1, detail2, detail3) {
    return {
        type : types.FORM_ADDED,
        name : name,
        detail1 : detail1,
        detail2 : detail2,
        detail3 : detail3
    };
}

export function sendForm(student, manager) {
    return {
        student : student,
        manager : manager
    };
}