import s from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = s.div`
padding: 15px;

`;

export const FilmContainer = s.div`
display: flex
`;

export const ImgWrapper = s.div`
display: flex;
align-items: center;
padding: 15px;
border-radius: 10px;
background-image: linear-gradient(to top left, #0100ec, #fb36f4);
`;

export const FilmInfoContainer = s.div`
width: 100%;
margin-left: 10px;
padding: 10px 20px;
border-radius: 10px;
background-image: linear-gradient(to right, #a32cdf, #106ad2);
`;

export const MovieTitle = s.h1`
color: #ffffff;
margin-bottom: 20px;
`;

export const RaitingTitle = s.h4`
display: inline;
color: #ffffff;
`;

export const RaitingTitleValue = s.p`
display: inline;
margin-left: 10px;
color: #ffe53b;
`;

export const OverviewTitle = s.h2`
color: #ffffff;
margin-top: 20px;
margin-bottom: 10px;
`;

export const OverviewText = s.p`
color: #ffe53b;
font-weight: 500;
`;

export const GenresTitle = s.h3`
color: #ffffff;
margin-top: 20px;
margin-bottom: 10px;
`;

export const GenresList = s.ul`
color: #ffe53b;
`;

export const AdditionalInformationWrapper = s.div`
margin-bottom: 10px;
`;

export const AdditionalInformationTitle = s.h4`
// font-weight: bold;
font-size: 25px;
color: #ffffff;
`;

export const StyledLinkWrapper = s.div`
display: flex;
flex-direction: column;
`;

export const StyledLink = s(Link)`
font-size: 27px;
color: #ffe53b;`;
