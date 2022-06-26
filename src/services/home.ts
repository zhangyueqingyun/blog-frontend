import {get} from '../utils/request'

export async function getProfile() {
    return get('profile')
}

export async function getCategoriedBlogs() {
    return get('news')
}