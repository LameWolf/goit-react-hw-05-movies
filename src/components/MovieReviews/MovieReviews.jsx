import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { fetchFilmReviews } from '../../services/ThemoviedbAPI';
import {
  MainWrapper,
  ReviewsList,
  ReviewsItem,
  ReviewsWrapper,
  ReviewsAuthorName,
  Review,
  ErrorTitle,
} from './MovieReviews.styled';

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [, setIsError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (movieReviews) return;

    const getReviews = async () => {
      try {
        setIsLoader(true);
        setIsError(false);
        const dataReviews = await fetchFilmReviews(movieId);
        if (!dataReviews) {
          setIsError(true);
        }
        setMovieReviews(dataReviews.results);
        // console.log(dataReviews);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    };
    getReviews();
  }, [movieReviews, movieId]);

  return isLoader ? (
    <Loader />
  ) : (
    <MainWrapper>
      <ReviewsList>
        {movieReviews && movieReviews.length > 0 ? (
          movieReviews.map(({ author, id, content }) => (
            <ReviewsItem key={id}>
              <ReviewsWrapper>
                <ReviewsAuthorName>Author: {author}</ReviewsAuthorName>
                <Review>{content}</Review>
              </ReviewsWrapper>
            </ReviewsItem>
          ))
        ) : (
          <ErrorTitle>We don't have any reviews for this movie.</ErrorTitle>
        )}
      </ReviewsList>
    </MainWrapper>
  );
};

export default MovieReviews;
