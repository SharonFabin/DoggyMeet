import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import {setPersonData} from "./reducers/firebase";
import thunkMiddleware from "redux-thunk";


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export {store};