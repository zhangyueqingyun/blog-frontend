import {get} from '../utils/request'

export async function getProfile() {
    return get('profile')
}