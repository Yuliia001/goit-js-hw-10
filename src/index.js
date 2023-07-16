import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import { fetchBreeds } from "./cat-api";
    
const refs = {
    select: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    catInfo: document.querySelector('.cat-info')
};
const { select, loader, error, catInfo } = refs;

// select.addEventListener('select', fetchBreeds)

fetchBreeds()
    .then(data => {
        // select.innerHTML = createMarkup(data);
        select.insertAdjacentHTML('beforeend', createMarkup(data));
         console.log(data)
})
    .catch(error => {
        console.log(error)
    }
  )
  

function createMarkup(arr) {
    return arr.map(({id, name}) => `<option value="${id}">${name}</option>`).join('')
}

