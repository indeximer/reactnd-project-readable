import {RECEIVE_POSTS} from './types';
import * as PostAPI from '../../Utils/PostAPI';

export const getPosts = (posts) => ({
    type: RECEIVE_POSTS,
    posts
})

export const getPostsAsync = () => (dispatch) =>(
    PostAPI.getAll()
        .then((posts) => dispatch(getPosts(posts)))
)