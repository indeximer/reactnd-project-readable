const apiUrl = "http://localhost:3001/posts";
const header =  { headers: { 'Authorization': '11ds4as4a54sd5a' }}

export const getAll = () =>
    fetch(apiUrl, header)
        .then((response) => response.json())
        .then((data) => {return data});