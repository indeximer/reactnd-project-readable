import {GET_CATEGORIES} from '../Actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case GET_CATEGORIES:
            return{
                ...state,
                categories: action.categories
            };
        default:
            return state;
    }
}