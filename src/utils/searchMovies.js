export default function searchMovies(movies, searchKeyword) {
    let movieList = [];
    const keys = ['episode_id', 'title', 'release_date'];
    movies?.forEach(movie => {
        const match = keys.find((key) => {
            return String(movie[key]).toLowerCase().includes(searchKeyword.toLowerCase());
        })
        if (match) {
            movieList.push(movie);
        }
    })
    return movieList;
}