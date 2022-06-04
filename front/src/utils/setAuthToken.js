import axios from 'axios';

const setAuthToken = token => {
    if(token){
        //Apply to very request
        axios.defaults.headers.common['x-auth-token'] = token;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        // axios.defaults.baseURL = 'http://localhost:4000';
    } else {
        //Delete Auth Token
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default  setAuthToken;
