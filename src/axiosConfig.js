import axios from "axios";

const axiosConfig = axios.create({
 baseURL: process.env.API_DB || "http://localhost:3000",
});


export default axiosConfig;