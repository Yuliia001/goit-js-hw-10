import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
    
const refs = {
    select: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    catInfo: document.querySelector('.cat-info')
};
const { select, loader, catInfo } = refs;

select.addEventListener('change', handlerSelectCat)

fetchBreeds()
    .then(data => {
        const options = createMarkup(data);
        new SlimSelect({
            select: select,
            data: options
        });
        loader.style.display = 'none';
    });
   
  
function createMarkup(arr) {
    return arr.map(({ id, name }) => `<option value="${id}">${name}</option>`).join('');
   
}
function handlerSelectCat(evt) {
    loader.style.display = 'block';
    const breedIdSelected = evt.currentTarget.value;

    fetchCatByBreed(breedIdSelected) 
        .then(data => {
        if (!data.length) {
            return;
        }
            
        catInfo.innerHTML = createMarkupInfoCat(data)
        loader.style.display = 'none';
    
    })
}
  
function createMarkupInfoCat(arr) {
    return arr.map(({ breed: [{name, description, temperament}], url }) => `
      <img src="${url}" alt="${name}" width=300>
      <h2>Порода: ${name} </h2>
      <p>${description}</p>
      <p>Темперамент: ${temperament}</p>`)
        .join('')
      
}
