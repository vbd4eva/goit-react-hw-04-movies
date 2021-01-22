import s from './TMDb.module.css'

export default function TMDb() {
    return (
      <div className={s.container}>
            <img 
                className={s.logo}
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
                alt="TMDb logo"
            />
            <div className={s.message}>
                <p className={s.txt}>This site using <a className={s.link} href="https://www.themoviedb.org/">TMDb</a> materials as the source</p>
            </div>
      </div>
    )
}
