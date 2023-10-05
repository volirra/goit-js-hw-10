import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');

const infoLoader = document.querySelector('.loader');
const selectError = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

window.addEventListener('load', init);

function init() {
  let breedsData;
  fetchBreeds()
    .then(data => {
      breedsData = data;
      data.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);

        breedSelect.classList.remove('is-hidden');
        infoLoader.classList.add('is-hidden');
      });
    })
    .catch(error => {
      console.log(error);
      selectError.classList.remove('is-hidden');
      breedSelect.classList.add('is-hidden');
      infoLoader.classList.add('is-hidden');
    });
}
 
breedSelect.addEventListener('change', () => {
    const selectBreedId = breedSelect.value;
    infoLoader.classList.remove('is-hidden');
    catInfo.classList.add('is-hidden');
    selectError.classList.add('is-hidden');

    fetchCatByBreed(selectBreedId)
      .then (result => {
        const catData = result.breeds[0];
        const breedData = breedsData.find(
        breed => breed.id === catData.breeds[0].id
      );

        const markup = createMarkup(result);
        catInfo.innerHTML = markup;

        infoLoader.classList.add('is-hidden');
        catInfo.classList.remove('is-hidden');
      })
      .catch(error => {
        console.log(error);
        selectError.classList.remove('is-hidden');
        infoLoader.classList.add('is-hidden');
      });
  });

function createMarkup(result) {
  const breedData = result.breeds[0];
  return `<img src='${result.url}' width='300' alt=''/>
          <div class='textInfo'><h1>${breedData.name}</h1>
          <p>${breedData.description}</p>
          <p><b>Temperament:</b> ${breedData.temperament}</p></div>`;
}
