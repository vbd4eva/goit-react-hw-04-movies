import {useState, useEffect} from 'react'

import FetchApi from '../../js/fetchApi'

import MoviesList from '../MoviesList/MoviesList'

  
const fetchApi = new FetchApi();


function MoviesTrends() {

    const [trendMovies, setTrendMovies] = useState([]);

    useEffect(() => {
        fetchTrendsMovies();
    },[]);

    return (
        <div>
            <h2>MoviesTrends.js</h2>
            {trendMovies && <MoviesList list={trendMovies} />}
        </div>
    )

    async function fetchTrendsMovies() {
        const weekTrendingMovies = await fetchApi.trendMoviesDay().then(movies => movies);

        setTrendMovies(movies=>[...movies, ...weekTrendingMovies]);
    }
}

export default MoviesTrends