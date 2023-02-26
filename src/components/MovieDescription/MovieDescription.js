import "./MovieDescription.css";
import { useState, useEffect, memo } from 'react';
import convertToRoman from "../../utils/convertToRoman";

const MovieDescription = memo(({ movie }) => {
    const { episode_id, title, opening_crawl, director } = movie.length > 0 ? movie[0] : '';
    const [romanEpisode, setRomanEpisode] = useState();

    useEffect(() => {
        setRomanEpisode(convertToRoman(episode_id));
    }, [episode_id]);

    return (
        <div id="movie-description" data-testid="movie-description" className={'description-container ' + (movie.length > 0 ? 'selected-movie-wrapper' : 'no-movie-selected')}>
            {movie.length > 0 ? <div className="movie-wrapper">
                <h1>Episode {romanEpisode} - {title} </h1>
                <p>{opening_crawl}</p>
                <div className="director-field">Directed by: {director}</div>
            </div> : <h3>No movie selected</h3>}
        </div>
    )
});

export default MovieDescription;