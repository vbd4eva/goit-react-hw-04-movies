import {useState, useEffect} from 'react'

import Searchbar from './Searchbar/Searchbar'

import FetchApi from '../../js/fetchApi'

import MoviesList from '../MoviesList/MoviesList'


const fetchApi = new FetchApi();

export default function MoviesSearch() {

    const [submitedSearchQuery, setSubmitedSearchQuery] = useState('');
    const [findedMovies, setFindedMovies] = useState([]);

    useEffect(() => {
        if (!submitedSearchQuery) return;
        fetchSearchMovies(submitedSearchQuery);
    },[submitedSearchQuery]);


    return (
        <div>
            <Searchbar onSubmit={setSubmitedSearchQuery} />
            <MoviesList list={findedMovies} />
        </div>
    )

    async function fetchSearchMovies(submitedSearchQuery) {
        const searchedMovies = await fetchApi.searchMovies(submitedSearchQuery).then(movies => movies);

        setFindedMovies(movies=>[...movies, ...searchedMovies]);
    }
}
