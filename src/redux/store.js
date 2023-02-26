import { configureStore } from "@reduxjs/toolkit";
import { currentEpisodeReducer, moviesReducer, sortMoviesReducer, searchMovieReducer } from './features'

export default configureStore({
    reducer: {
        currentEpisode: currentEpisodeReducer,
        movies: moviesReducer,
        sortMoviesBy: sortMoviesReducer,
        searchMovie: searchMovieReducer
    }
})

