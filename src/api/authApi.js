import axios from "axios";

const authApi = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyD2XbOBMG9QHIxnkxqu_UlNHMRQpNNjFOs'
    }
})

export default authApi;