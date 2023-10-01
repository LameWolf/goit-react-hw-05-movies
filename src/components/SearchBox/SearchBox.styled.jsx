import { FcSearch } from 'react-icons/fc';
import s from 'styled-components';

export const Wrapper = s.div`
  // display: inline-flex;
  // align-items: center;
  // justify-content: center;
  // position: relative;
  // margin: 0 auto;
  // height: 70px;
  // width: 100%;
  // max-width: 450px; 
  // text-transform: uppercase;
`;

export const SearchForm = s.form`
display: flex;
align-items: center;
margin: 0 auto;
width: 100%;
max-width: 600px;
background-color: rgba(255, 255, 255, 0.5);
border-radius: 3px;
overflow: hidden;
`;

export const Input = s.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  outline: none;
  flex: 1;
  height: 100%;
`;

export const SearchFormBtn = s.button`
display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: transparent;
  &:hover {
    opacity: 1;
  }
`;
