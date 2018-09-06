const apiUrl = "http://localhost:3001/categories";
const header =  { headers: { 'Authorization': '11ds4as4a54sd5a' }}

export const getAll = () =>
    fetch(apiUrl, header)
        .then((response) => response.json())
        .then((data) => data.categories);