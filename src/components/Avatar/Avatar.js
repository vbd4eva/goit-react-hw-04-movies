import s from './Avatar.module.css'

const AVATAR_DEFAULT = [
    'https://www.clipartmax.com/png/middle/344-3440375_diversity-drawing-acceptance-transgender-avatar.png',
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-grey-d9222f16ec16a33ed5e2c9bbdca07a4c48db14008bbebbabced8f8ed1fa2ad59.svg',
    'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
]

export default function Avatar({ name, gender, src }) {

    const getImgUrl = (param) => (
        (src)
        ?
        `https://image.tmdb.org/t/p/${param}${src}`
        :
        AVATAR_DEFAULT[gender]
  );
  
  const alt = (src) ? `the "${name}" portrait` : 'image for not founded avatar';


    return (
              <img
                loading="lazy"
                className={s.avatar}
                src={getImgUrl('w154')}
                srcSet={`${getImgUrl('w154')} 1x, ${getImgUrl('w300')} 2x`}
                alt={alt}
                />
    )
}
