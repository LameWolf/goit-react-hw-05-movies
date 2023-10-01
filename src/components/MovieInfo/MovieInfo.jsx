import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { convertRatingToPercentage } from '../../helpers/convertRaiting';
import {
  Wrapper,
  FilmContainer,
  ImgWrapper,
  FilmInfoContainer,
  MovieTitle,
  RaitingTitle,
  RaitingTitleValue,
  OverviewTitle,
  OverviewText,
  GenresTitle,
  GenresList,
  AdditionalInformationWrapper,
  AdditionalInformationTitle,
  StyledLinkWrapper,
  StyledLink,
} from './MovieInfo.styled';
import poster from '../../img/defposterImg.jpg';
import Loader from 'components/Loader/Loader';

export const MovieInfo = ({ movie }) => {
  const posterPath = movie.poster_path || movie.backdrop_path;
  return (
    <Wrapper>
      <FilmContainer>
        <ImgWrapper>
          <img
            src={
              movie.poster_path || movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w342/${posterPath}`
                : poster
            }
            alt={movie.title}
          />
        </ImgWrapper>
        <FilmInfoContainer>
          <MovieTitle>{movie.title}</MovieTitle>
          <RaitingTitle>
            User Score:
            <RaitingTitleValue>
              {convertRatingToPercentage(movie.vote_average)}
            </RaitingTitleValue>
          </RaitingTitle>
          <OverviewTitle>Overview:</OverviewTitle>
          <OverviewText>{movie.overview}</OverviewText>
          <GenresTitle>Genres:</GenresTitle>
          <GenresList>
            {movie.genres.map(({ name }) => name).join(', ')}
          </GenresList>
        </FilmInfoContainer>
      </FilmContainer>
      <AdditionalInformationWrapper>
        <AdditionalInformationTitle>
          Additional information:
        </AdditionalInformationTitle>
        <StyledLinkWrapper>
          <StyledLink to="cast">Cast</StyledLink>
          <StyledLink to="reviews">Reviews</StyledLink>
        </StyledLinkWrapper>
      </AdditionalInformationWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

// return (
//   <div className="Container">
//     <div className="FilmInfoContainer">
//       <div>
//         <img
//           src={poster_path && backdrop_path}
//           alt={title ?? original_title ?? 'No Title'}
//         />
//       </div>
//       <div className="FilmInfo">
//         <h1>{title ?? original_title ?? 'No Title'}</h1>
//         <h4>User Score: {popularity && 'No rating'}</h4>
//         <h2>Overview</h2>
//         <p>{overview && 'No overview'}</p>
//         <h3>Genres</h3>
//         <ul>
//           {genre_ids &&
//             genre_ids.map(genre_id => {
//               return <li key={genre_id}>{genre_id}</li>;
//             })}
//         </ul>
//       </div>
//       <div>
//         <h4>Additional information</h4>
//         <ul></ul>
//       </div>
//     </div>
//   </div>
// );
