import {useState, useEffect, useRef} from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'

import MovieDetails from '../components/MovieDetails/MovieDetails'
import ButtonGoBack from '../components/ButtonGoBack/ButtonGoBack'
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
    }, [movieId]);
    
    const history = useHistory();
    const {state} = useLocation();    
    const {current: goBackLink } = useRef(state?.from);

    function goBack() {
        goBackLink && history.push(goBackLink);
    }


    return (
        <div>
            {singleMovie &&
                <>
                    {goBackLink && 
                        <ButtonGoBack onClick={goBack}/>
                    }                    
                    <MovieDetails singleMovie={singleMovie} />
                    <MovieDetailsAdditional />
                </>
            }


        </div>
    )
}
