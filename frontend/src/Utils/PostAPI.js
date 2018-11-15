import { apiUrl, headers } from './apiConstants'

const endPoint = '/posts'

export const getAll = () => fetch(`${apiUrl}${endPoint}`, {headers})
    .then((response) => response.json())
    .then((data) => {return data})

export const getPostsByCategory = (category) => fetch(`${apiUrl}/${category}${endPoint}`, {headers})
    .then((response) => response.json())
    .then((data) => {return data})