import {REMOVE_ALERT, SET_ALERT} from "../types";

const initialState = [];

export default function alertReducer( state = initialState, action ){
    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(al => al.id !== payload);
        default:
            return state;
    }
}