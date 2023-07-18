import axios from 'axios';

axios.defaults.headers.common["x-api-key"] = "live_V44W7mYW5tvarXTpNIUiUrdadDllJNHA9D11rFWWXU1xNvRvQvB553CLeAZMt2et";
const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT1 = '/breeds';
const END_POINT2 = '/images/search';
function fetchBreeds(){
    return axios.get(`${BASE_URL}${END_POINT1}`)
    .then(response => {
        if (response.status !== 200) {
                // console.log(response.status);
          throw new Error(response.statusText);    
        }
    return response.data;
        })
    .catch(() => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
  });
}

function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}${END_POINT2}?breed_ids=${breedId}`)
    .then(response => {
        if (response.status !== 200) {
          throw new Error(response.statusText);   
        }
    return response.data;
        })  
    .catch(() => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
  });  
}

export { fetchBreeds, fetchCatByBreed };
