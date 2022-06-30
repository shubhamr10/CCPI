import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import {AUTH_ERROR, GET_ROLES, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, USER_LOADED} from "../types";
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
            dispatch(get_roles());
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

/*
* @description : GET ALL ROLES
* */
export const get_roles = () => async dispatch => {
    try{
        let { data } = await axios.get('/role/roles');
        dispatch({
            type:GET_ROLES,
            payload:data.data
        });
    } catch (e) {
        console.log(e);
        dispatch(setAlert('Error while fetching roles', 'danger'))
    }

}