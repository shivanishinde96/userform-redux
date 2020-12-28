import { combineReducers } from "redux";
import userReducer from "./userReducer";
import {reducer as formReducer } from 'redux-form'

/*reducers*/
export default combineReducers({
    users:userReducer,
    form:formReducer
})