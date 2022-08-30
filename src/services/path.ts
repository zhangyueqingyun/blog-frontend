import {get} from '../utils/request'

export async function getPathById(type: String, id: any) {
    return get(`${type}/path/${id}`)
}