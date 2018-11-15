import {RECEIVE_POSTS, RECEIVE_CATEGORY_POSTS} from '../Actions/types';

const initialState = {
    posts:[]
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_POSTS:
            return{
                ...state,
                posts: action.payload
            }
        case RECEIVE_CATEGORY_POSTS:
            return{
                ...state,
                posts: [...action.payload]
            }
        default:
            return state;
    }
}

export default postReducer;