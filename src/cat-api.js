import axios from 'axios';

axios.defaults.headers.common["x-api-key"] = "live_V44W7mYW5tvarXTpNIUiUrdadDllJNHA9D11rFWWXU1xNvRvQvB553CLeAZMt2et";
const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT = '/breeds';

function fetchBreeds(){
    return axios.get(`${BASE_URL}${END_POINT}`)
        .then(response => {
            if (!response.status) {
                // console.log(response.status);
            throw new Error(response.statusText);
                
            }
        return response.data;
  })
 
}
export { fetchBreeds };