import Movie from '../Movie/Movie';
import { memo } from 'react';
import './MovieList.css';

const MovieList = memo(({ movies }) => {
    return (
        <div data-testid="movie-list-container" className={'movie-list-container' + (movies.length === 0 ? ' no-list' : '')}>
            {movies?.length > 0 ? movies.map(movie => <Movie key={movie.episode_id} movie={movie} />) : <h3>No movies found</h3>}
        </div>
    )
});

export default MovieList;