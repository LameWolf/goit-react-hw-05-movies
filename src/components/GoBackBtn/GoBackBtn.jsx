import { BtnBack } from './GoBackBtn.styled';

export const GoBackBtn = ({ path }) => {
  return <BtnBack to={path}>Go back</BtnBack>;
};
