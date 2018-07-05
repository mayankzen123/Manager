import {EMAIL_CHANGED, LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from "./ActionTypes";
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux'

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

//Dangling Operator arrow function
export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER,
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch((error) => loginUserFailure(dispatch, error))
            });
    };
};

const loginUserFailure = (dispatch, error) => {
    dispatch({
        type: LOGIN_USER_FAILURE,
        payload: error.message
    })
};
const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    //To Reset Login Screen To Home Screen
    Actions.main({type: 'reset'})
};