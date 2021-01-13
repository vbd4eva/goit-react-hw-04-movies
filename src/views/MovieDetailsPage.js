import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import MovieDetails from '../components/MovieDetails/MovieDetails'

import FetchApi from '../js/fetchApi'
const fetchApi = new FetchApi();

export default function MovieDetailsPage() {

    const [singleMovie, setSingleMovie] = useState('');
    
    const { movieId } = useParams();
    
    useEffect(() => {
        if (!movieId) {
            console.log("movieId == false in MovieDetailsPage");
            return;
        } 
        fetchMovieById(movieId);
    },[movieId]);

    return (
        <div>
            <h1>MovieDetailsPage {movieId}</h1>
            {singleMovie &&
                <MovieDetails singleMovie={singleMovie}/>
            }
            
        </div>
    )

    function fetchMovieById(movieId) {
        fetchApi.movieById(movieId).then(setSingleMovie);
    }
}
