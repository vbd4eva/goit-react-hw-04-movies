import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import CastPersonCard from './CastPersonCard/CastPersonCard'

import s from './Cast.module.css'

import FetchApi from '../../js/fetchApi'
const fetchApi = new FetchApi();

export default function Cast() {

    const [movieCast, setMovieCast] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) {
            console.log("movieId == false in Cast component");
            return;
        } 
        fetchApi.creditsByMovieId(movieId).then(setMovieCast);

    },[movieId])

    return (
        <div>
            <h1>Актерский состав</h1>
            {movieCast &&
                movieCast.map(({ id, name, character}) => (
                    <CastPersonCard key={id}
                        name={name}
                        character={character}
                    />
                ))
            }
        </div>
    )
}
