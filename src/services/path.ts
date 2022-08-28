import {get} from '../utils/request'

export async function getPathById(id: any) {
    return get(`path/${id}`)
}