import { MovieCard } from '../MovieCard/MovieCard';
import { MoviesListStyled } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <MoviesListStyled>
      {movies &&
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </MoviesListStyled>
  );
};
