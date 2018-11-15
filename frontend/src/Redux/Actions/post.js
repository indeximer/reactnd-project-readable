import {RECEIVE_POSTS, RECEIVE_CATEGORY_POSTS} from './types';

import * as PostAPI from '../../Utils/PostAPI';

export const getPosts = (payload) => ({
    type: RECEIVE_POSTS,
    payload
})
export const getPostsAsync = () => (dispatch) =>(
    PostAPI.getAll()
        .then(posts => dispatch(getPosts(posts)))
)

export const getPostsByCategory = (payload) => ({
    type: RECEIVE_CATEGORY_POSTS,
    payload
})
export const getPostsByCategoryAsync = (category) => (dispatch) =>(
    PostAPI.getPostsByCategory(category)
        .then(posts => dispatch(getPostsByCategory(posts)))
)