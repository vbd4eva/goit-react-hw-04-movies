import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Notification from '../../components/Notification/Notification'
import CastPersonCard from '../../components/CastPersonCard/CastPersonCard'

import s from './CastView.module.css'

import FetchApi from '../../js/fetchApi'
const fetchApi = new FetchApi();

export default function CastView() {

    const [movieCast, setMovieCast] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) {
            console.log("movieId == false in Cast component");
            return;
        }
        fetchApi.creditsByMovieId(movieId).then(setMovieCast);

    }, [movieId]);

    return (        
        (movieCast.length) ?
            <>
            <Header title="Cast" />
                <div className={s.cast}>
                    <ul className={s.list}>                
                        {movieCast.map(({ id, name, character, gender,  profile_path}) => (
                            
                            <CastPersonCard key={id}
                                name={name}
                                character={character}
                                gender={gender}
                                avatar={profile_path}
                            />
                        ))}
                    </ul>
                </div>
            </>
        :
            <Notification message='We don`t have any cast list for this movie.' />        
    )
}
