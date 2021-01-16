import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import MovieDetails from '../components/MovieDetails/MovieDetails'
import MovieDetailsAdditional from './MovieDetailsAdditionalView/MovieDetailsAdditionalView'


import FetchApi from '../js/fetchApi'
const fetchApi = new FetchApi();

export default function MovieDetailsPage() {

    const [singleMovie, setSingleMovie] = useState(null);

    const { movieId } = useParams();
    
    useEffect(() => {
        if (!movieId) {
            console.log("movieId == false in MovieDetailsPage component");
            return;
        } 
        fetchApi.movieById(movieId).then(setSingleMovie);
    },[movieId]);

    return (
        <div>
            {singleMovie &&
                <>
                    <MovieDetails singleMovie={singleMovie} />
                    <MovieDetailsAdditional />
                </>
            }


        </div>
    )
}
