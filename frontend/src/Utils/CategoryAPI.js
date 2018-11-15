import { apiUrl, headers } from './apiConstants'

const endPoint = '/categories'

export const getAll = () => fetch(`${apiUrl}${endPoint}`, { headers })
    .then((response) => response.json())
    .then((data) => data.categories)