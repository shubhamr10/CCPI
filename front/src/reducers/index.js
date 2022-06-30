import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import centreReducer from "./centreReducer";

export default combineReducers({
    auth:authReducer,
    alert:alertReducer,
    centres:centreReducer
});