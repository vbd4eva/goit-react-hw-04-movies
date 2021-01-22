import {useState, useEffect} from 'react'

import Searchbar from './Searchbar/Searchbar'

import FetchApi from '../../js/fetchApi'

import MoviesList from '../MoviesList/MoviesList'
import Notification from '../Notification/Notification'


const fetchApi = new FetchApi();

export default function MoviesSearch() {

    const [submitedSearchQuery, setSubmitedSearchQuery] = useState('');
    const [findedMovies, setFindedMovies] = useState([]);

    useEffect(() => {
        if (!submitedSearchQuery) return;
        fetchSearchMovies(submitedSearchQuery);
    }, [submitedSearchQuery]);
    
    const message = (submitedSearchQuery)
        ? `no results were found for "${submitedSearchQuery}"`
        : `founded movies will be displayed here`;

    return (
        <div>   
            <Searchbar onSubmit={setSubmitedSearchQuery} />

            {
            (findedMovies.length) ?
                <MoviesList list={findedMovies} />
            :
                <Notification message={message} />
            }
        </div>
    )

    function fetchSearchMovies(submitedSearchQuery) {
        fetchApi.searchMovies(submitedSearchQuery).then(setFindedMovies);
    }
}
