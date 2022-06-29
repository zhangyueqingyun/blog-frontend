import {get} from '../utils/request'

export async function getCategoriedBlogs() {
    return get('news')
}