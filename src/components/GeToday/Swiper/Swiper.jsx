// import { animated, useSpring } from "react-spring";
import style from './style.module.css'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'
import vector from './Vector.svg'
import { OpenCard } from '../OpenCard/OpenCard'
import { useState } from 'react'

export function Swiper() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModalHandler = () => {
        setIsModalOpen(true)
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.card_1}>
                        <img
                            src={img1}
                            alt=''
                            className={style.card}
                        />
                        <button onClick={openModalHandler} className={style.button_1}><img src={vector} alt="" className={style.vector} /> </button>
                        <div>
                            <div className={style.title}>Aerospace</div>
                            <div className={style.text}>A 40-Year Bond: GE’s Ties to India Grow With New Investments in Its Defense and Commercial Sectors</div>
                        </div>
                    </div>
                    <div className={style.card_2}>

                        <img
                            src={img2}
                            alt=''
                            className={style.card}
                        />
                        <button onClick={openModalHandler} className={style.button_2}><img src={vector} alt="" className={style.vector} /> </button>

                        <div>
                            <div className={style.title}>The vanguard</div>
                            <div className={style.text}>The 5 Coolest Things on Earth This Week</div>
                        </div>
                    </div>
                    <div className={style.card_3}>
                        <img
                            src={img3}
                            alt=''
                            className={style.card}
                        />
                        <button onClick={openModalHandler} className={style.button_3}><img src={vector} alt="" className={style.vector} /> </button>
                        <div>
                            <div className={style.title}>Robotics</div>
                            <div className={style.text}>‘The Backbone of Indian Aviation’: GE Aerospace, CFM Close One of Commercial Aviation’s Largest Deals Ever</div>
                        </div>
                    </div>
                </div>
            </div >
            <OpenCard
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </>
    );
};