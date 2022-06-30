import {GET_REGIONAL_CENTERS, GET_STUDY_CENTERS} from "../types";

const initialState = {
    study_centres:[],
    regional_centres:[]
};

export default function centreReducer(state=initialState, action){
    const { type, payload } = action;
    switch (type) {
        case GET_STUDY_CENTERS:
            return { ...state, study_centres: payload };
        case GET_REGIONAL_CENTERS:
            return { ...state, regional_centres: payload };
        default:
            return state;
    }
}