import axios from "axios";
import {setAlert} from "./alert.actions";
import {GET_REGIONAL_CENTERS} from "../types";

/*
* @description : GET REGIONAL CENTERS
* */
export const load_regional_centers = () => async dispatch => {
    try{
        let { data } = await axios.get('/center/regional-centers');
        if(data.success){
            dispatch({
                type: GET_REGIONAL_CENTERS,
                payload:data.data
            });
        } else {
            throw new Error('Error in API')
        }
    } catch (e) {
        console.log(e);
        dispatch(setAlert('Error while fetching regional centers', 'danger'));
    }

}