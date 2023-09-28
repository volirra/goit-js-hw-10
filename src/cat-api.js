const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY = 'live_yBI02igIcefpcD2AUW0cwA8QfQTdJY7SV7SyHlO3KuUhh4lZJ1xAzcW2VeCRUnde';

export function fetchBreeds() {
  return fetch('${BASE_URL}/breeds')
    .then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export function fetchBreedsById(id) {
  return fetch('${BASE_URL}/images/search?breed_ids=${id}&api_key=${API_KEY}')
    .then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}



import axios from 'axios';
const API_KEY =
  'live_yBI02igIcefpcD2AUW0cwA8QfQTdJY7SV7SyHlO3KuUhh4lZJ1xAzcW2VeCRUnde';
axios.defaults.headers.common['x-api-key'] = API_KEY;

export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}
