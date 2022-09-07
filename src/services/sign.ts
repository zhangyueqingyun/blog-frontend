import {get} from '../utils/request'

export async function getSigns() {
    return get(`sign/all`)
}