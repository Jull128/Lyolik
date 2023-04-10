import { Swiper } from './Swiper/Swiper'
import style from './style.module.css'

export function GeToday() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.button__box}>
                    <button className={style.button_big}>Visit the newsroom</button>
                    <button className={style.button_small}></button>
                </div>

                <div className={style.title__box}>
                    <div className={style.title}>GE TODAY</div>
                    <div className={style.swiper}>
                        <Swiper />
                    </div>
                </div>
            </div>
        </div>
    )
}