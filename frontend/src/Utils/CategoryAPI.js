const apiUrl = "http://localhost:3001/categories";

export const getAll = () =>
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => data);