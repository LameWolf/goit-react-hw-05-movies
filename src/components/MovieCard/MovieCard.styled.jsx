import s from 'styled-components';
import { Link } from 'react-router-dom';

export const ImgWrapper = s.li`
display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 415px;
  flex-basis: calc((100% - 5 * 28px) / 6); /* Ширина картки за допомогою flex-basis */

`;

export const StyledLink = s(Link)`
display: inline-block;
justify-content: center;
align-items: center;
padding: 20px 15px;
margin: 0 auto;
border-radius: 15px;
border: 3px solid purple;
background-color: #ffffff`;

export const MovieTitle = s.p`
width: 185px;
margin-top: 10px;
`;
