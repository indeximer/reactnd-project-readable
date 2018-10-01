import {RECEIVE_POSTS} from '../Actions/types';

const initialState = {
    posts:[]
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEIVE_POSTS:
            return{
                ...state,
                posts: action.posts
            };
        default:
            return state;
    }
}

export default postReducer;