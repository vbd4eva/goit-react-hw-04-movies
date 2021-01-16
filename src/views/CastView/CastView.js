import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header/Header'
import CastPersonCard from '../../components/CastPersonCard/CastPersonCard'

import s from './CastView.module.css'

import FetchApi from '../../js/fetchApi'
const fetchApi = new FetchApi();

export default function CastView() {

    const [movieCast, setMovieCast] = useState(null);

    const { movieId } = useParams();
    console.log(movieId);

    useEffect(() => {
        if (!movieId) {
            console.log("movieId == false in Cast component");
            return;
        } 
        fetchApi.creditsByMovieId(movieId).then(setMovieCast);

    },[movieId])

    return (
        <>
            <Header title="Cast" />
            
            {movieCast && 
                <div className={s.cast}>
                    <ul className={s.list}>                
                        {movieCast.map(({ id, name, character,  profile_path}) => (
                            
                            <CastPersonCard key={id}
                                name={name}
                                character={character}
                                avatar={profile_path}
                            />
                        ))}
                    </ul>
                </div>


            }
        </>
    )
}
