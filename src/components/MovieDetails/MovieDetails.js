import Header from '../Header/Header'

import s from './MovieDetails.module.css'

export default function MovieDetails({singleMovie}) {

    const { title, original_title, original_language:abbr, overview, vote_average, poster_path:poster, backdrop_path } = singleMovie;
    const containerInlineStyle = {backgroundImage: `url(https://image.tmdb.org/t/p/w780/${backdrop_path})`};
    return (
        <div className={s.container} style={containerInlineStyle}>
            <div className={s.content}>

                <Header title={title} rank="1" className={s.title} />

                <img
                    loading="lazy"
                    className={s.poster}
                    src={'https://image.tmdb.org/t/p/w300'+poster}
                    //   srcset={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster} 1x, https://image.tmdb.org/t/p/w440_and_h660_face/${poster} 2x`}
                    srcSet={`https://image.tmdb.org/t/p/w300${poster} 1x, https://image.tmdb.org/t/p/w780${poster} 2x`}
                    alt={title + " poster"}
                />

                <div className={s.inf}>
                    <p className={s.language}>
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
