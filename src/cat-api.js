import axios from 'axios';

axios.defaults.headers.common["x-api-key"] = "live_V44W7mYW5tvarXTpNIUiUrdadDllJNHA9D11rFWWXU1xNvRvQvB553CLeAZMt2et";
const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT1 = '/breeds';
const END_POINT2 = '/images/search';
function fetchBreeds(){
    return axios.get(`${BASE_URL}${END_POINT1}`)
        .then(response => {
    return response.data;
        })
}

function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}${END_POINT2}?breed_ids=${breedId}`)
        .then(response => {
    return response.data;
        })  
}

export { fetchBreeds, fetchCatByBreed };
