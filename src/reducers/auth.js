import {CREATE_USER_SUCCESS, CREATE_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL} from '../constants/ActionTypes';

const initialState = {
    loggingIn: false,
    loggedIn: false,
    signingIn: false,
    loggingOut: false,
};

const auth = (state = [], action) => {
    switch (action.type) {
        case(LOGIN_USER_SUCCESS):
            const userId = action.user.uid;
            return {...state, loggedIn: true, userId};
        case(LOGIN_USER_FAIL):
            return {...state, loggedIn: false};
        case('LOG_OUT'):
            return {loggingOut: true};
        case(CREATE_USER_SUCCESS):
            return {...state};
        case(CREATE_USER_FAIL):
            return {...state};
        default:
            return state;
    }
};

export default auth;