import s from 'styled-components';

export const CastWrapper = s.div`
display: block;
width: 100%;
`;

export const CastList = s.ul`
display: flex;
flex-wrap: wrap;
gap: 15px;
justify-content: center;
align-items: center;
list-style: none;
`;

export const CastItem = s.li`
display: flex;
flex-direction: column;
align-items: center;
padding: 15px;
border-radius: 10px;
background-image: linear-gradient(to top left, #0100ec, #fb36f4);
width: 200px;
`;

export const TextWrapper = s.div`
width: 100%;
margin-top: 7px;
background-color: #ffffff;
`;

export const CastName = s.h1`
font-size: 17px;
text-align: center;
`;

export const CastCharacher = s.h2`
font-size: 13px;
text-align: center;
`;
