import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './App.styled';
import Layout from 'components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../../pages/Home'));

const Movies = lazy(() => import('../../pages/Movies'));

const MovieDetails = lazy(() => import('../../pages/MovieDetails'));

const MovieCast = lazy(() => import('../MovieCast/MovieCast'));

const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

const NotFound = lazy(() => import('../../pages/NotFound'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
      <GlobalStyle />
    </>
  );
};
