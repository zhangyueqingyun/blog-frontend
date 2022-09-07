import {get} from '../utils/request'

export async function getBlogById(id: any) {
    return get(`blog/${id}`)
}

export async function readBlog(id: any) {
    return get(`blog/read/${id}`)
}