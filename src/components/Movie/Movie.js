import { memo, useEffect, useState } from 'react';

import './Movie.css';

import { useDispatch } from 'react-redux';
import { setCurrentEpisode } from '../../redux/features/currentEpisodeSlice';

import convertToRoman from '../../utils/convertToRoman';
import useDeviceCheck from '../../hooks/useDeviceCheck';

const Movie = memo(({ movie }) => {
    const { episode_id, title, release_date } = movie;
    const [romanEpisode, setRomanEpisode] = useState();
    const dispatch = useDispatch();
    const device = useDeviceCheck();

    function handleMovieSelection() {
        dispatch(setCurrentEpisode(episode_id));
        /* scroll to movie description section on movie select for mobile view */
        if (device.isMobile) {
            const movieDescription = document.querySelector('#movie-description');
            movieDescription?.scrollIntoView({ behavior: "smooth" });
        }
    }

    useEffect(() => {
        setRomanEpisode(convertToRoman(episode_id));
    }, [episode_id]);

    return (
        <div>
            <button className='movie-card-container' onClick={handleMovieSelection} data-testid="button">
                <div className="episode-num">
                    EPISODE {episode_id}
                </div>
                <div className="episode-num-title">
                    EPISODE {romanEpisode} - {title}
                </div>
                <div className="episode-release-date">
                    {release_date}
                </div>
            </button>
        </div>

    )
})

export default Movie