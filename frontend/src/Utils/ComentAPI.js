const apiUrl = "";

export const getAll = () =>
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => data);