export default function sortMovies(movies, sortByParam) {
    let movieList = movies;
    if (movieList.length > 0 && sortByParam.length > 0) {
        switch (sortByParam) {
            case 'Episode': movieList = [...movies].sort((a, b) => a.episode_id - b.episode_id);
                break;
            case 'Title': movieList = [...movies].sort((a, b) => a.title > b.title ? 1 : -1);
                break;
            case 'Year': movieList = [...movies].sort((a, b) => a.release_date > b.release_date ? 1 : -1);
                break;
            default: break;
        }
    }
    return movieList;
}