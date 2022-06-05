import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {AUTH_ERROR, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, USER_LOADED} from "../types";
import {setAlert} from "./alert.actions";
// axios.defaults.baseURL = 'http://localhost:4000';

/*
* @description : Load User details
* */
export const loadUser = () => async dispatch => {
    try{
        if(localStorage.ccpi_token){
            setAuthToken(localStorage.ccpi_token);
        }
        const { data } = await axios.get('/users/auth');
        if(data){
            dispatch({
                type:USER_LOADED,
                payload : data
            });
        }
    } catch (e) {
        console.error('error', e);
        dispatch({
            type: AUTH_ERROR
        });
    }
}

/*
* @description : LOGIN ACTION
* */
export const login = (formData) => async dispatch => {
    try{
        let { data } = await axios.post('/users/auth', formData);
        if(data.token){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: data
            });
            dispatch(loadUser());
        }
    } catch (e) {
        const { errors } = e.response.data;
        if(Array.isArray(errors)){
            errors.map(err => dispatch(setAlert(err.msg, 'danger')));
        }
        dispatch({
            type: LOGIN_FAILED
        })
        console.error('error', e);
    }
}

/*
* @description : LOGOUT
* */
export const logout = () => dispatch => {
    dispatch({type: LOGOUT});

}