import {get} from '../utils/request';

export async function getCategoriedBlogs() {
    return get('blog/news');
}

export async function getNav() {
    return get('nav');
}