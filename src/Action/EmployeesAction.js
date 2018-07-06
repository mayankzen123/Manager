import {
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_REQUEST,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_UPDATE,
    PASSWORD_CHANGED
} from "./ActionTypes";
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux'

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};

export const employeeCreate = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        dispatch({
            type: EMPLOYEE_UPDATE,
            payload: {prop: 'loading', value: true}
        });
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => {
                dispatch({type: EMPLOYEE_CREATE})
                Actions.pop()
            })
    };
};
export const saveEmployeeUpdate = (name, phone, shift, empId) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        dispatch({
            type: EMPLOYEE_UPDATE,
            payload: {prop: 'loading', value: true}
        });
        firebase.database().ref(`/users/${currentUser.uid}/employees/${empId}`)
            .set({name, phone, shift})
            .then(() => {
                dispatch({type: EMPLOYEE_CREATE})
                Actions.pop()
            })
    };
};
export const employeeRemove = (empId) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        dispatch({
            type: EMPLOYEE_UPDATE,
            payload: {prop: 'loading', value: true}
        });
        firebase.database().ref(`/users/${currentUser.uid}/employees/${empId}`)
            .remove()
            .then(() => {
                dispatch({type: EMPLOYEE_CREATE})
                Actions.pop()
            })
    };
};
export const employeeReset = () => {
    return {
        type: EMPLOYEE_CREATE
    };
};
export const employeeFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', sanpshot => {
                dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: sanpshot.val()})
            })
    };
};