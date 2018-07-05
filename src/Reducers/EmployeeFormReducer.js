import {
    EMPLOYEE_UPDATE
} from "../Action/ActionTypes";

const INTIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}
/*Reducer will communicate with action and change state on that basis
* Quick Tips:-
* 1.Never duplicate Action Type Name because it is used in Reducer and Action little typo can break link.
* 2.Reducer will only called when new state is not same as previous state newstate!==previousstate */

export default (state = INTIAL_STATE, action) => {
    console.log("Employee Form Reducer", action);
    switch (action.type) {
        //action.payload === {prop:'name' and value:'mayank'}
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        default:
            return state;
    }
};