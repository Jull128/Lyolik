import style from './style.module.css'
import vector from '../GeToday/Swiper/Vector.svg'

export function TheRoad() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.title__box} >
                    <p className={style.title}>The road to zero: New <br />
                        York - power plant teams with GE <br />
                        on     ‘Green Hydrogen’<br />
                        demonstration project</p>
                </div>
                <div className={style.description__container}>
                    <div className={style.button__box}>
                        <button className={style.button_big}>Visit the newsroom</button>
                        <button className={style.button_small}><img src={vector} alt="" className={style.vector} /> </button>
                    </div>
                    <div className={style.description__text}>
                        <p className={style.firstLine}>Energy</p>
                        <p className={style.scndLine}>H2 in 2022? For one of New York’s 7F.05 gas turbines a blend of natural gas with 5% “green hydrogen” will become a reality</p>
                    </div>
                </div>
            </div>
            <div className={style.background}>
            </div>
        </div>
    )
}