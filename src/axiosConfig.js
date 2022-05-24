import axios from "axios";

const axiosConfig = axios.create({
 baseURL: process.env.API_DB
});


export default axiosConfig;