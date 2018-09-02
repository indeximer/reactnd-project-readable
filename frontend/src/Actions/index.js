export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';

export function addPost({title,body,author}){
    return {
        type: ADD_POST,
        title,
        body,
        author
    }
}
