import s from './CastPersonCard.module.css'

export default function CastPersonCard({ id, name, character, avatar }) {
    return (
        <li className={s.person}>

            <div className={s.image}>

              <img
                loading="lazy"
                className={s.poster}
                src={'https://image.tmdb.org/t/p/w154'+avatar}
                srcSet={`https://image.tmdb.org/t/p/w154${avatar} 1x, https://image.tmdb.org/t/p/w300${avatar} 2x`}
                alt={name + "portrait"}
                />
                
            </div>

            <p className={s.inf}>
                <i className={s.name}>{name}</i>
                as
                <b className={s.character}>{character}.</b>
            </p>
        </li>

    )
}
