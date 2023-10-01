import { Link, Navigate } from 'react-router-dom';
import s from 'styled-components';
import page404 from '../img/404.jpg';

export const LinkBack = s(Link)`
  display: block;
width: 95px;
margin-top: 10px;
margin-left: 15px;
color: #ffffff;
padding: 15px;
border: 2px solid lemon;
border-radius: 10px;
background-image: linear-gradient(to right, #a32cdf, #106ad2);
`;

export const Img = s.img`
  margin: 0 auto;
  width: 60%;
`;

const NotFound = () => {
  return (
    <>
      <LinkBack to="/">Go Back</LinkBack>
      <Img src={page404} alt="Page not found" />
      <Navigate to="404.html" />
    </>
  );
};

export default NotFound;
