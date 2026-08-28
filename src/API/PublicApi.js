import axios from "axios";

export const PublicApi=axios.create({
    baseURL:"http://localhost:8080",
    withCredentials:true,
    
})