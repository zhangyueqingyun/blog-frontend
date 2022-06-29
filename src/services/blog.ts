import {get} from '../utils/request'

export async function getBlogById(id: any) {
    return get(`blog?id=${id}`)
}