import {useState, useEffect} from 'react'

import FetchApi from '../../js/fetchApi'

import MoviesList from '../MoviesList/MoviesList'

  
const fetchApi = new FetchApi();


function Trendings() {

    const [trendMovies, setTrendMovies] = useState([]);

    useEffect(() => {
        fetchTrendsMovies();
    },[]);

    return (
        <div>
            <h2>Trendings.js</h2>
            <MoviesList list={trendMovies} />
        </div>
    )

    async function fetchTrendsMovies() {
        const weekTrendingMovies = await fetchApi.trendMoviesDay().then(movies => movies);

        setTrendMovies(movies=>[...movies, ...weekTrendingMovies]);
    }
}

export default Trendings