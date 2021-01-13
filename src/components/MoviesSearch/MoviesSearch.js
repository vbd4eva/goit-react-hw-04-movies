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

    function fetchSearchMovies(submitedSearchQuery) {
        fetchApi.searchMovies(submitedSearchQuery).then(setFindedMovies);
    }
}
