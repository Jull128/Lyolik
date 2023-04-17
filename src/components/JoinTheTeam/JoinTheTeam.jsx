import img from './join.jpg'
import style from './style.module.css'

export function JoinTheTeam() {
    return (
        <div className={style.container}>

            <div className={style.title}>
                JOIN THE TEAM
            </div>

            <div className={style.box}>
                <img src={img} alt='' className={style.picture}></img>
                <div className={style.description}>
                    <p className={style.text}> GE Power is a world energy leader providing equipment, solutions and services across the energy value chain from generation to consumption. We are developing the energy technologies of the future. Power your career today!</p>
                    <button className={style.button}>VIEW POWER ROLES</button>
                </div>
            </div>

        </div>
    )
}