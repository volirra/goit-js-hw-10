import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');
const catImage = document.querySelector('.cat-image');
const catName = document.querySelector('.cat-name');
const catDescription = document.querySelector('.cat-description');
const catTemperament = document.querySelector('.cat-temperament');

// Function to populate breed options in the select element
async function populateBreeds() {
  try {
    const breeds = await fetchBreeds();
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  } catch (err) {
    console.error('Error fetching breeds:', err);
    showError();
  }
}

async function displayCatInfo(breedId) {
  try {
    const catData = await fetchCatByBreed(breedId);
    const cat = catData[0];
    catImage.src = cat.url;
    catName.textContent = cat.breeds[0].name;
    catDescription.textContent = cat.breeds[0].description;
    catTemperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
    catInfo.style.display = 'block';
  } catch (err) {
    console.error('Error fetching cat info:', err);
    showError();
  }
}

function hideLoader() {
  loader.style.display = 'none';
}

function showError() {
  error.style.display = 'block';
}

breedSelect.addEventListener('change', event => {
  const breedId = event.target.value;
  catInfo.style.display = 'none';
  loader.style.display = 'block';
  error.style.display = 'none';
  displayCatInfo(breedId).then(hideLoader);
});

populateBreeds().then(hideLoader);
