import {
    EMPLOYEE_FETCH_SUCCESS
} from "../Action/ActionTypes";

const INTIAL_STATE = {};

export default (state = INTIAL_STATE, action) => {
    console.log("Employee List Reducer", action);
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};