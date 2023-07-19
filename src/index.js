import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
    
const refs = {
    select: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    catInfo: document.querySelector('.cat-info')
};
const { select, loader, catInfo } = refs;

select.addEventListener('change', handlerSelectCat);

fetchBreeds()
    .then(data => {
        const markup = createMarkup(data);
        select.innerHTML = markup;
        new SlimSelect({
            select: select
        });
        loader.style.display = 'none';
    })
    .catch((error) => {
        console.log(error);
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
  });
  
function createMarkup(arr) {
    return arr.map(({ id, name }) => `<option value="${id}">${name}</option>`).join('');
   
}
function handlerSelectCat(evt) {
    const breedIdSelected = evt.currentTarget.value;
    loader.style.display = 'block'; 
    select.style.display = 'none';
    catInfo.style.display = 'none';
    
    fetchCatByBreed(breedIdSelected) 
        .then(data => {
            if (!data.length) {
            return;
        }
         
        catInfo.innerHTML = createMarkupInfoCat(data);
            loader.style.display = 'none';
            catInfo.style.display = 'block';
    
        })
        .catch((error) => {
            console.log(error);
            Notiflix.Notify.failure('Oops! There is no such breed of cat!');
        })
}

  
function createMarkupInfoCat(arr) {
  return arr.map(({ breeds: [{ name, description, temperament }], url }) => `
    <img src="${url}" alt="${name}" width="300">
    <h2>Порода: ${name}</h2>
    <p>${description}</p>
    <p>Темперамент: ${temperament}</p>`
  ).join('');
}



