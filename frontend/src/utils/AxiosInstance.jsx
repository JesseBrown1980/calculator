import axios from "axios"
const axiosInstance = axios.create({
    responseType: "json",
  })
  
  export default axiosInstance