import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { MovieList, MovieDescription, SearchAndSortMovie } from './components';

import { sun, moon, starWarsLogo_Light, startWarsLogo_Dark } from './assets';

import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from './redux/features/moviesSlice';

import sortMovies from './utils/sortMovies';

function App() {
  const movies = useSelector(state => state.movies.value);
  const searchMovie = useSelector(state => state.searchMovie);
  const sortByParam = useSelector(state => state.sortMoviesBy.value);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const currentEpisode = useSelector(state => state.currentEpisode.value);
  const dispatch = useDispatch();

  localStorage.setItem('theme', theme);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get("https://swapi.dev/api/films/?format=json");
        const { results } = data;
        dispatch(setMovies(results));
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [dispatch])

  return (
    <div data-testid="app-container" className={'app-container ' + (theme === 'light' ? 'light' : 'dark')}>
      <header className='app-header'>
        <img className="star-wars-logo" src={theme === 'light' ? starWarsLogo_Light : startWarsLogo_Dark} alt="star wars logo" width="200px" height="100px" />
        <img className='theme-img' src={theme === 'light' ? moon : sun} alt={theme === 'light' ? moon : sun} width="40px" height="40px" onClick={toggleTheme} />
      </header>
      <SearchAndSortMovie />
      <div className="movie-container">
        <MovieList movies={searchMovie.value.length > 0 ? (searchMovie.list.length > 0 ? searchMovie.list : []) : sortMovies(movies, sortByParam)} />
        <MovieDescription movie={movies.filter(movie => movie.episode_id === currentEpisode)} />
      </div>
    </div>
  );
}

export default App;
