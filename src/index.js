import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/index";
import thunkMiddleware from "redux-thunk";


const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export {store};