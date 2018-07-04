import {
    EMAIL_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    PASSWORD_CHANGED
} from "../Action/ActionTypes";

const INTIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: null,
    loading: false
}
/*Reducer will communicate with action and change state on that basis
* Quick Tips:-
* 1.Never duplicate Action Type Name because it is used in Reducer and Action little typo can break link.
* 2.Reducer will only called when new state is not same as previous state newstate!==previousstate */

export default (state = INTIAL_STATE, action) => {
    console.log("Auth Reducer Loging", action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
        //Instead of clearing each state one by one call INTIAL STATE
        case LOGIN_USER_SUCCESS:
            return {...state, ...INTIAL_STATE, user: action.payload};
        case LOGIN_USER_FAILURE:
            return {...state, user: null, error: action.payload, loading: false};
        case LOGIN_USER:
            return {...state, loading: true, error: null, user: null};
        default:
            return state;
    }
};