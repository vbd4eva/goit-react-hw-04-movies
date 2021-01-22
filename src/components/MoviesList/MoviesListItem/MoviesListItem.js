import PropTypes from "prop-types";
import { Link, useHistory,  } from "react-router-dom";

import Poster from '../../Poster/Poster'

import s from './MoviesListItem.module.css'

function MoviesListItem({ id, title, overview, vote, poster, adult }) {

  const history = useHistory();
  const href = history.createHref(history.location);

  return (
    <li className={s.movieCart}>
      
      <div className={s.image}>
        <Poster src={poster} movieTitle={title} />
      </div>
        
      <div className={s.brief}>
        {adult && <p className={s.adult}>adult!</p>}
        <Link to={{
          pathname: `/movies/${id}`,
          state: {
            from: href
          }
        }}>
          <h3 className={s.title}>{title}</h3>
        </Link>
        <p className={s.vote}>{vote}</p>
      </div>
        
      {overview &&
        <p className={s.overview}>{overview}</p>
      }
    </li>
  );

}

MoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
};

export default MoviesListItem;

