import style from './style.module.css'
import mask from './Mask.png'

export function GePower() {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.title}>GE Power</div>

                <div className={style.content}>
                    <p className={style.text_firstLine}>We’re focused on powering</p>
                    <p className={style.text_scndLine}>lives and the future of electricity.</p>
                    <div className={style.picture}>
                        <img src={mask} alt='' />
                        <div>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}