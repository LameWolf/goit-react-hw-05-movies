import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import s from 'styled-components';
import { ReactComponent as Logo } from 'popcorn.svg';
import Loader from 'components/Loader/Loader';

export const Container = s.div`
margin: 0 auto;`;

export const Header = s.div`
display: flex;
flex-wrap: wrap;
align-items: center;
gap: 20px;
padding: 15px;
background-color: black;
border: 3px solid purple;
border-radius: 7px;`;

const StyledLink = s(NavLink)`
  color: #ffffff;
  padding: 0 10px;

  &.active {
    color: orange;
  }
`;

export const LogoStyled = s(Logo)`
  fill: white;
`;

const Layout = () => {
  return (
    <Container>
      <Header>
        <LogoStyled />
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
