import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { fetchFilmCredits } from '../../services/ThemoviedbAPI';
import poster from '../../img/defposterImg.jpg';
import {
  CastWrapper,
  CastList,
  CastItem,
  TextWrapper,
  CastName,
  CastCharacher,
} from './MovieCast.styled';

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (movieCast) return;

    const getCast = async () => {
      try {
        setIsLoader(true);
        setIsError(false);
        const dataCast = await fetchFilmCredits(movieId);
        if (!dataCast) {
          setIsError(true);
        }
        setMovieCast(dataCast.cast);
        // console.log(dataCast);
        // console.log(dataCast.cast);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    };
    getCast();
  }, [movieCast, movieId]);

  return isLoader ? (
    <Loader />
  ) : (
    <CastWrapper>
      <CastList>
        {movieCast ? (
          movieCast.map(({ cast_id, name, profile_path, character }) => (
            <CastItem key={cast_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : poster
                }
                alt={name}
              />
              <TextWrapper>
                <CastName>{name}</CastName>
                <CastCharacher>Character: {character}</CastCharacher>
              </TextWrapper>
            </CastItem>
          ))
        ) : (
          <div>No Cast Information</div>
        )}
      </CastList>
    </CastWrapper>
  );
};

export default MovieCast;
