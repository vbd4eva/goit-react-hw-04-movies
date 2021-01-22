import PropTypes from "prop-types";

import Header from '../Header/Header'
import Poster from '../Poster/Poster'


import s from './MovieDetails.module.css'

export default function MovieDetails({singleMovie}) {

    const { title, original_title, original_language:abbr, overview, vote_average, poster_path:poster, backdrop_path } = singleMovie;
    const containerInlineStyle = {backgroundImage: `url(https://image.tmdb.org/t/p/w780/${backdrop_path})`};

    return (
        <div className={s.container} style={containerInlineStyle}>
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