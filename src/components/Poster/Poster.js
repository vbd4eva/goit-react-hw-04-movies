import PropTypes from "prop-types";

import s from './Poster.module.css';

export default function Poster({ src, movieTitle }) {

    const getImgUrl = (param) => (
        (src)
        ?
        `https://image.tmdb.org/t/p/${param}${src}`
        :
        Poster.defaultProps.src
  );
  
  const alt = (src) ? `the "${movieTitle}" movie poster` : 'image for not founded poster';

    return (
        <img
          loading="lazy"
          className={s.poster}
          src={getImgUrl('w300')}
          srcSet={`${getImgUrl('w300')} 1x, ${getImgUrl('w780')} 2x`}
          alt={alt}
        />
    )
}

Poster.propTypes = {
  src: PropTypes.string,
  movieTitle: PropTypes.string.isRequired,
}

Poster.defaultProps = {
  src: 'https://www.vinelanddriveintheater.com/assets/front/images/comingSoon.jpg'
};
