import { useLocation } from 'react-router-dom';
import poster from '../../img/defposterImg.jpg';
import { ImgWrapper, StyledLink, MovieTitle } from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const location = useLocation();

  return (
    <ImgWrapper>
      <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
              : poster
          }
          alt={movie.title}
          width="185px"
        />
        <MovieTitle>{movie.title}</MovieTitle>
      </StyledLink>
    </ImgWrapper>
  );
};
