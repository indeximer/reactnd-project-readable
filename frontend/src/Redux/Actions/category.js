import {RECEIVE_CATEGORIES} from './types';
import * as CategoryAPI from '../../Utils/CategoryAPI';

export const getCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
})

export const getCategoriesAsync = () => (dispatch) =>(
    CategoryAPI.getAll()
        .then((categories) => dispatch(getCategories(categories)))
)