import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

breedSelect.addEventListener('change, changeBreed')

function changeBreed(e) {
  const id = e.currentTarget.value;
  
}