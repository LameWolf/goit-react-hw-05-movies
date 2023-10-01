import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTEwOTg1MTgwNGQ1ZGRkMmJmMWUyOTdhODdmNmJmMSIsInN1YiI6IjY0NzhkOGQ5MDc2Y2U4MDEyOGZiZTJlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j6EjOqAJq1KE8D77RDVZNjcbJ6WYIpIHawx1_3OTLiw';

export const fetchTrendingFilmsDay = async () => {
  const params = { language: 'en-US' };
  const { data } = await axios.get(
    '/trending/movie/day?language=en-US',
    params
  );
  return data.results;
};

export const fetchFilmsByName = async query => {
  const params = { include_adult: false, language: 'en-US', page: 1 };
  const { data } = await axios.get(`/search/movie?query=${query}`, { params });
  // console.log(data.results);
  return data.results.map(result => {
    const {
      id,
      title,
      original_title,
      popularity,
      vote_average,
      overview,
      genre_ids,
      poster_path,
      backdrop_path,
    } = result;
    return {
      id,
      title,
      original_title,
      popularity,
      vote_average,
      overview,
      genre_ids,
      poster_path,
      backdrop_path,
    };
  });
};

export const fetchFilmById = async movieId => {
  const params = { language: 'en-US' };
  const { data } = await axios.get(`/movie/${movieId}`, { params });
  // console.log(movieId);

  return data;
};

export const fetchFilmCredits = async movieId => {
  const params = { language: 'en-US' };
  const resp = await axios.get(`/movie/${movieId}/credits`, params);
  return resp.data;
};

export const fetchFilmReviews = async movieId => {
  const params = { language: 'en-US', page: 1 };
  const resp = await axios.get(`/movie/${movieId}/reviews`, params);
  return resp.data;
};
