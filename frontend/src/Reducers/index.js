import { combineReducers } from 'redux'
import {ADD_POST, REMOVE_POST} from '../Actions';

function post(state = {}, action){
    switch(action.type){
        case ADD_POST:
            return;
    }
    return state
}

function category(state = {}, action){
    switch(action.type){
        case ADD_POST:
            return;
    }
    return state
}

export default combineReducers({post, category});