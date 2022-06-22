import axios from 'axios' 
const BASE_URL = 'http://localhost:8000'

function getResponseStatus(response: any) {
    return response?.status === 200 && response?.data?.code === 20000
}

export async function get(path: String,  params?: Object) {
    const response = await  axios.get(`${BASE_URL}/${path}`, {
        params
    })
    const success = getResponseStatus(response)
    if(!success) {
        throw new Error('请求错误')
    }
    return  response.data.data
}