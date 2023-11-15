import axios from "axios"

export let baseUrl = process.env.REACT_APP_APIURL || "http://localhost:8000";

export let apiInstance = axios.create({
    baseURL:baseUrl,
    headers:{
        Authorization:`Bearer ${localStorage.getItem('authToken')}`
    }
})

export let Get = (endPoint:string,queryParams?:any)=> apiInstance.get(`/${endPoint}`,{
    params:{...queryParams}
})

export let Post = (endPoint: string, data?: any) => apiInstance.post(endPoint, data);
