import s from "./ReviewBlock.module.css";

export default function ReviewBlock({updated, author:{username,name}, content}) {
    return (
        <div>
            <p>
                <i>{updated}</i>
                <b>{name}</b> ({username})
            </p>
            <p>{content}</p>
        </div>
    )
}
