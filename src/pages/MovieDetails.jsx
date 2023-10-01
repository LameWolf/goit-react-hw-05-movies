import { useEffect, useRef, useState } from 'react';
import Loader from '../components/Loader/Loader';
import { GoBackBtn } from '../components/GoBackBtn/GoBackBtn';
import { MovieInfo } from '../components/MovieInfo/MovieInfo';
import { useLocation, useParams } from 'react-router-dom';
import { fetchFilmById } from '../services/ThemoviedbAPI';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [, setIsError] = useState(false);
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (movie) {
      return;
    }
    const asyncWrapper = async () => {
      try {
        setIsError(false);
        setIsLoader(true);
        const movie = await fetchFilmById(movieId);
        setMovie(movie);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    };
    asyncWrapper();

    return () => {};
  }, [movie, movieId]);

  return (
    <div>
      <GoBackBtn path={goBack.current} />
      {movie ? <MovieInfo movie={movie} /> : null}
      {isLoader && <Loader />}
    </div>
  );
};

export default MovieDetails;
