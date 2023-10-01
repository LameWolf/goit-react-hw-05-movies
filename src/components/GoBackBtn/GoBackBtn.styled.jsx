import s from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnBack = s(Link)`
display: block;
width: 90px;
margin-top: 10px;
margin-left: 15px;
color: #ffffff;
padding: 15px;
border: 2px solid lemon;
border-radius: 10px;
background-image: linear-gradient(to right, #a32cdf, #106ad2);
`;
