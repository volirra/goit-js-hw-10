const API_KEY =
  'live_yBI02igIcefpcD2AUW0cwA8QfQTdJY7SV7SyHlO3KuUhh4lZJ1xAzcW2VeCRUnde';
const BASE_URL = 'https://api.thecatapi.com/v1/';

export function fetchBreeds() {
  return fetch(`${BASE_URL}breeds`)
    .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(id) {
  return fetch(`${BASE_URL}images/search?breed_ids=${id}&api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
