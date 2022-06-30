import {AUTH_ERROR, LOGIN_FAILED, USER_LOADED, LOGOUT, LOGIN_SUCCESS, GET_ROLES} from "../types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    roles:[]
};

export default function authReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('ccpi_token', payload.token);
            return { ...state, ...payload, isAuthenticated: true, loading:false };
        case AUTH_ERROR:
        case LOGIN_FAILED:
        case LOGOUT:
            localStorage.removeItem('token');
            return { ...state, token: null, isAuthenticated: false, loading: false, user: null };
        case USER_LOADED:
            return { ...state, isAuthenticated: true, user: payload, loading: false };
        case GET_ROLES:
            return { ...state, roles: payload }
        default:
            return state;
    }

}