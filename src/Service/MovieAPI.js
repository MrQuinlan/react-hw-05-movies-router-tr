const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNzcyMGQ1NTkwZTZiNzY4NWJjOTIxOWYzMjU0MjdhMiIsInN1YiI6IjYyOTFkZmI2NWE0NjkwMDA2N2MyMWMyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G_K8Vo0JEYr4A-vXF7u5v12S12CS6WUdAoGg4s7u5Z0',
  },
};

const moviesApi = (option = 'trending', query = '', movieId = null) => {
  switch (option) {
    case 'trending':
      return fetch(`${BASE_URL}${option}/movie/week?language=en-US`, options);

    case 'search':
      return fetch(
        `${BASE_URL}${option}/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      );

    case 'searchById':
      return fetch(`${BASE_URL}movie/${movieId}?language=en-US`, options);

    case 'credits':
      return fetch(
        `${BASE_URL}movie/${movieId}/credits?language=en-US`,
        options
      );

    case 'reviews':
      return fetch(
        `${BASE_URL}movie/${movieId}/reviews?language=en-US&page=1`,
        options
      );

    default:
      break;
  }
};

const getMovies = async (option, query, id) => {
  const response = await moviesApi(option, query, id);
  return await response.json();
};

export default getMovies;
