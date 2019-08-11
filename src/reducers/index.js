import {combineReducers} from 'redux';
import {setPersonData} from './firebase';
import auth from '../reducers/auth';
import load from '../reducers/load';

const rootReducer = combineReducers({
    firebase: setPersonData,
    auth,
    load
});

export default rootReducer;