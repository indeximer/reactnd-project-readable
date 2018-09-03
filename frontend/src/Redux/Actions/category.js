import {GET_CATEGORIES} from './types';

export function addPost(categories){
    return {
        type: GET_CATEGORIES,
        categories
    }
}
