import { useEffect, useState } from 'react';
import { fetchTrendingFilmsDay } from 'services/ThemoviedbAPI';
import s from 'styled-components';
import { MoviesList } from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';

const MainTitle = s.h1`
  text-align: center;
  color: #ffffff;
  margin-top: 10px;
`;

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoader(true);
        const movies = await fetchTrendingFilmsDay();
        setTrendingMovies(movies);
      } catch (error) {
        console.error('Error fetching trending films:', error);
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <MainTitle>Tranding Today</MainTitle>
      {isLoader && <Loader />}
      {!isError && <MoviesList movies={trendingMovies} />}
    </main>
  );
};

export default Home;
