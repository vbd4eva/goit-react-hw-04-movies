import {useRef} from 'react'
import {useHistory, useLocation } from 'react-router-dom'


import PropTypes from "prop-types";

import ButtonGoBack from '../ButtonGoBack/ButtonGoBack'
import Header from '../Header/Header'
import Poster from '../Poster/Poster'


import s from './MovieDetails.module.css'

export default function MovieDetails({ singleMovie }) {
    
    const history = useHistory();
    const {state} = useLocation();    
    const {current: goBackLink } = useRef(state?.from);

    function goBack() {
        goBackLink && history.push(goBackLink);
    }

    const { title, original_title, original_language:abbr, overview, vote_average, poster_path:poster, backdrop_path } = singleMovie;
    const containerInlineStyle = {backgroundImage: `url(https://image.tmdb.org/t/p/w780/${backdrop_path})`};

    return (
        <div className={s.container} style={containerInlineStyle}>
            {goBackLink && 
                <ButtonGoBack onClick={goBack}/>
            }
            
            <div className={s.content}>

                <Header title={title} rank="1" className={s.title} />

                <div className={s.poster}>
                    <Poster src={poster} movieTitle={title} />
                </div>

                <div className={s.inf}>
                    <p>
                        <span className={s.abbr}>{abbr}</span>
                        <span className={s.originalTitle}>{original_title}</span>
                    </p>
                    <p>Votes: <b className={s.rating}>{vote_average}</b>%</p>
                    <p className={s.overview}>{overview}</p>
                </div>
            </div>
        </div>
    )
}

MovieDetails.propTypes = {
  singleMovie: PropTypes.object.isRequired,
}