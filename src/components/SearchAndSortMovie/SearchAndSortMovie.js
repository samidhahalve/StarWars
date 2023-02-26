import React, { useState, memo, useEffect } from 'react';

import './SearchAndSortMovie.css';

import { close_icon } from '../../assets';

import { useSelector, useDispatch } from 'react-redux';
import { sortBy } from '../../redux/features/sortMoviesSlice';
import { setSearchKeyword, setSearchDisplayList } from '../../redux/features/searchMovieSlice';
import { setCurrentEpisode } from '../../redux/features/currentEpisodeSlice';

import searchMovies from '../../utils/searchMovies';

const SearchAndSortMovie = memo(() => {
    const [showSort, setShowSort] = useState(false);
    const movies = useSelector(state => state.movies.value);
    const dispatch = useDispatch();

    function handleShowHideSort(event) {
        setShowSort(event.target.id === 'sort-btn');
    }

    function handleSortSelection(event) {
        dispatch(sortBy(event.target.innerHTML));
        setShowSort(false);
    }

    function handleSearch(event) {
        const searchTerm = event.target.value;
        dispatch(setSearchKeyword(searchTerm));
        if (searchTerm.length > 0) {
            const movieItems = searchMovies(movies, searchTerm);
            if (movieItems.length > 0) {
                dispatch(setSearchDisplayList(movieItems));
                if (movieItems.length === 1) {
                    dispatch(setCurrentEpisode(movieItems[0].episode_id));
                }
            } else {
                dispatch(setSearchDisplayList([]));
            }
        }
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const parentNode = document.querySelector('.sort-container');
            if (!parentNode.contains(event.target)) {
                handleShowHideSort(event);
            }
        }
        if (!showSort) {
            document.addEventListener("click", handleOutsideClick, false);
        } else {
            document.removeEventListener("click", handleOutsideClick, false);
        }
    }, [showSort]);

    return (
        <div data-testid="search-sort-container" className='search-sort-container'>
            <button id='sort-btn' className='sort-btn' onClick={handleShowHideSort}>Sort by...</button>
            <div className={'sort-container ' + (showSort ? 'show' : 'hide')}>
                <div className='sort-label'>
                    <span>Sort by</span><img src={close_icon} alt="close icon" width="12px" height="12px" onClick={handleShowHideSort} />
                </div>
                <ul className='sort-list'>
                    <li onClick={handleSortSelection}>Episode</li>
                    <li onClick={handleSortSelection}>Title</li>
                    <li onClick={handleSortSelection}>Year</li>
                </ul>
            </div>
            <input className='search-movie' type='search' placeholder='Type to search...' onChange={handleSearch}></input>
        </div>
    )
});

export default SearchAndSortMovie;