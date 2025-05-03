const API_KEY = '2ecd6ac9' // Get from OMDb after registration
const BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await response.json();
  return data.Search || []; // Returns array of movies or empty array
};