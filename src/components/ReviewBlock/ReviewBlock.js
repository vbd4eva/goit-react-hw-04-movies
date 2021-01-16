import s from "./ReviewBlock.module.css";

export default function ReviewBlock({updated, author:{username,name}, content}) {
    return (
        <div className={s.block}>
            <p className={s.header}>
                <i className={s.date}>{updated}</i>
                <b className={s.userName}>{username}</b>
                {name &&
                    <span className={s.name}> / {name}</span>                   
                }
            </p>
            <p className={s.content}>{content}</p>
        </div>
    )
}
