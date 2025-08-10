import axios from "axios";

export function getImagesByQuery(query) {
    const API_KEY = ;

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });
    
    return axios(`https://pixabay.com/api/?${params}`)
    .then(response => response.data)
};
