import {GET_CATEGORIES} from './types';

export const addPost = (categories =  [
    {
        name:'React',
        path:'react'
    },
    {
        name:'Redux',
        path:'redux'
    },
    {
        name:'Android',
        path:'android'
    },
    {
        name:'Linux',
        path:'linux'
    }
]) => ({
    type: GET_CATEGORIES,
    categories
})
