import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import s from './MoviesListItem.module.css'

function MoviesListItem({ id, title, overview, vote, poster, adult }) {
  return (
    <li className={s.movieCart}>
      <Link to={`/movies/${id}`}>
          <div className={s.image}>
              <img
                loading="lazy"
                className={s.poster}
                src={'https://image.tmdb.org/t/p/w300/'+poster}
              //   srcset={`https://image.tmdb.org/t/p/w220_and_h330_face/${poster} 1x, https://image.tmdb.org/t/p/w440_and_h660_face/${poster} 2x`}
                srcSet={`https://image.tmdb.org/t/p/w300/${poster} 1x, https://image.tmdb.org/t/p/w780/${poster} 2x`}
                alt={title + "poster"}
              />
            </div>
        <div className={s.content}>
          {adult && <p className={s.adult}>adult!</p>}
                <h3 className={s.title}>{title}</h3>
                <p className={s.vote}>{vote}</p>
                <p className={s.overview}>{overview}</p>
            </div>          
        </Link>
    </li>
  );
}

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
};

export default MoviesListItem;
