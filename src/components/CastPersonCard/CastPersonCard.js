import PropTypes from "prop-types";

import Avatar from '../Avatar/Avatar';

import s from './CastPersonCard.module.css'

export default function CastPersonCard({ name, character, gender, avatar }) {
    return (
        <li className={s.person}>

            <div className={s.image}>
                <Avatar name={name} gender={gender} src={avatar} />
            </div>

            <p className={s.inf}>
                <i className={s.name}>{name}</i>
                as
                <b className={s.character}>{character}.</b>
            </p>
        </li>

    )
}

CastPersonCard.propTypes = {
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    gender: PropTypes.number.isRequired,
    avatar: PropTypes.string,
}
