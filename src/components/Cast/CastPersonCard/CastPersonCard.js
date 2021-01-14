import s from './CastPersonCard'

export default function CastPersonCard({ id, name, character }) {
    return (
        <p>
            <b>{character}</b>
            <br/>
            <i>{name}</i>.
        </p>
    )
}
