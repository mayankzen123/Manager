import {
    EMPLOYEE_CREATE,
    EMPLOYEE_UPDATE
} from "../Action/ActionTypes";

const INTIAL_STATE = {
    name: '',
    phone: '',
    shift: 'Monday',
    loading: false,
    empid: ''
};

export default (state = INTIAL_STATE, action) => {
    console.log("Employee Form Reducer", action);
    switch (action.type) {
        //action.payload === {prop:'name' and value:'mayank'}
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case EMPLOYEE_CREATE:
            return {INTIAL_STATE};
        default:
            return state;
    }
};