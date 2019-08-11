import * as firebase from 'firebase';
import {CREATE_USER_SUCCESS, CREATE_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from '../constants/ActionTypes'

const createUserSuccess = (resp) => {
    return {
        type: CREATE_USER_SUCCESS,
        user: resp,
    }
};

const createUserFail = (error) => {
    return {
        type: CREATE_USER_FAIL,
        error
    }
};

const loginUserSuccess = (resp) => {
    return {
        type: LOGIN_USER_SUCCESS,
        user: resp,
    }
};

const loginUserFail = (error) => {
    return {
        type: LOGIN_USER_FAIL,
        error
    }
};

const createUser = (email, pass) => dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .then((resp) => {
            return dispatch(createUserSuccess(resp));
        })
        .catch((error) => disptach(createUserFail));
};

const loginUser = (email, pass) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, pass)
        .then((resp) => {
            return dispatch(loginUserSuccess(resp));
        })
        .catch((error) => {
            dispatch(loginUserFail)
        });
};

const dispatchLogin = () => {
    return {type: LOGIN_USER_SUCCESS};
};

export {
    createUserSuccess,
    createUserFail,
    loginUserSuccess,
    loginUserFail,
    createUser,
    loginUser,
    dispatchLogin
};