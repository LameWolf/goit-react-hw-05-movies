import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from 'styled-components';
import { toast } from 'react-toastify';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { MoviesList } from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';
import { fetchFilmsByName } from '../services/ThemoviedbAPI';

export const SearchFilmTitle = s.h1`
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [, setIsError] = useState(false);
  const [searchparams] = useSearchParams();
  const query = searchparams.get('query');

  useEffect(() => {
    if (!query) return;
    const asyncWrapper = async () => {
      try {
        setIsError(false);
        setIsLoader(true);
        const movies = await fetchFilmsByName(query);
        // console.log(movies);
        if (movies.length === 0) {
          setMovies([]);
          return toast.error(
            'No movie with this name found! Enter correct query!'
          );
        }
        setMovies(movies);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    };
    asyncWrapper();

    return () => {};
  }, [query]);

  return (
    <>
      <div>
        <SearchFilmTitle>Search Films</SearchFilmTitle>

        <SearchBox />
        <MoviesList movies={movies} />
        {isLoader && <Loader />}
      </div>
    </>
  );
};

export default Movies;
