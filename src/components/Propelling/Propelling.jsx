import { useNavigate } from 'react-router-dom'
import style from './style.module.css'

export function Propelling() {
    const navigate = useNavigate()

    const openReport = () => {
        navigate('/report')
    }

    return (
        <div className={style.container}>

            <div className={style.title__box}>
                <p className={style.title__text}>Propelling <span>ge</span><br /> intro a new Era</p>
                <img className={style.banner} alt='' src='https://www.ge.com/sites/default/files/2020-04/City_Image_Narrow.jpg' />
            </div>
            <div className={style.button} onClick={openReport}>
                <button >22 annual report</button>
            </div>
        </div>
    )
}