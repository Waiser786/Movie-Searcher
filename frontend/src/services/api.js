const API_KEY = "40c1517e4f11638e7f58c70c1953e2e5";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};

export const searchMovieByID = async (id) =>{
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    const data = await response.json()
    return data
};