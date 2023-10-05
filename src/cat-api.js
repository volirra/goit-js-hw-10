import axios from 'axios';

const API_KEY = 'live_yBI02igIcefpcD2AUW0cwA8QfQTdJY7SV7SyHlO3KuUhh4lZJ1xAzcW2VeCRUnde';
axios.defaults.headers.common['x-api-key'] = API_KEY; 


export async function fetchBreeds() {
    const { data } = await axios.get('https://api.thecatapi.com/v1/breeds');
    return data;
}
  
export async function fetchCatByBreed(id) {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`
    );
    return response.data[0];
}
