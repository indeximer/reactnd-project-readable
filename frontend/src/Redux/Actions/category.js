import {GET_CATEGORIES} from './types';
import * as CategoryAPI from '../../Utils/CategoryAPI';

export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
})
