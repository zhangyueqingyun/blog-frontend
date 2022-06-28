import axios from 'axios' 
const API_URL = 'http://localhost:8000'
const BASE_URL = import.meta.env.MODE == 'mock'? '' : API_URL

function getResponseStatus(response: any) {
    return response?.status === 200 && response?.data?.code === 20000
}

export async function get(path: String,  params?: Object) {
    const response = await  axios.get(`${BASE_URL}/api/${path}`, {
        params
    })
    const success = getResponseStatus(response)
    if(!success) {
        throw new Error('请求错误')
    }
    return  response.data.data
}