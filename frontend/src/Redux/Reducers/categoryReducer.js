import {GET_CATEGORIES} from '../Actions/types';

const initialState = {
    categories:[
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
    ]
}

const categoryReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categories: [...state.categories, action.categories]
            };
        default:
            return state;
    }
}

export default categoryReducer;