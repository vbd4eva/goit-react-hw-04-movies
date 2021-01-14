import React from 'react'
import PropTypes from 'prop-types'

import s from './MoviesList.module.css'

import MoviesListItem from './MoviesListItem/MoviesListItem'

function MoviesList({list}) {
    return (
        <>
            <h2>MoviesList</h2>
            <ul className={s.listMovies}>
                {list.map(
                    ({ id, title, overview, vote_average, poster_path, adult }) =>
                        (<MoviesListItem key={id}
                            id={id}
                            title={title}
                            overview={overview}
                            vote={vote_average}
                            poster={poster_path}
                            adult={adult}
                        />)
                )}
            </ul>
        </>
    )
}

MoviesList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MoviesList

