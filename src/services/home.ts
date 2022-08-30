import {get} from '../utils/request';

export async function getCategoriesAndBlogs(categoryId: string | number) {
    return get(`category/${categoryId}`);
}

export async function getNews() {
    return get('news');
}

export async function getNav() {
    return get('navigation');
}