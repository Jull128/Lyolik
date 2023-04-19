import style from './style.module.css'

export function Report() {
    return (
        <div className={style.container}>

            <div className={style.title__box} >
                <p className={style.title}>The road to zero:demonstration project</p>
                <p className={style.title}>The road to zero:demonstration project</p>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className={style.description__container}>
                <p></p>
                <div className={style.description__text}>
                    <p className={style.firstLine}>Energy</p>
                    <p className={style.scndLine}>H2 in 2022? For one of New York’s 7F.05 gas turbines a blend of natural gas with 5% “green hydrogen” will become a reality</p>
                </div>
            </div>
        </div>
    )
}