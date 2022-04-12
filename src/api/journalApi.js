import axios from "axios";

const journalApi = axios.create({
    baseURL:'https://vue-demos-7901a-default-rtdb.firebaseio.com'
})

export default journalApi;