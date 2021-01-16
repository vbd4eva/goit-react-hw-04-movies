import {useState, useEffect} from 'react'

import FetchApi from '../../js/fetchApi'

import MoviesList from '../MoviesList/MoviesList'
import Header from '../Header/Header'

import s from './MoviesTrends.module.css'
  
const fetchApi = new FetchApi();

const HEADER_TEXT = 'Movies in day Trends'

function MoviesTrends() {

    const [trendMovies, setTrendMovies] = useState([]);

    useEffect(() => {
        fetchTrendsMovies();
    },[]);

    return (
        <section className={s.trends}>
            <Header title={HEADER_TEXT} rank="2" />
            
            {trendMovies && <MoviesList list={trendMovies} />}
        </section>
    )

    async function fetchTrendsMovies() {
        const weekTrendingMovies = await fetchApi.trendMoviesDay().then(movies => movies);

        setTrendMovies(movies=>[...movies, ...weekTrendingMovies]);
    }
}

export default MoviesTrends