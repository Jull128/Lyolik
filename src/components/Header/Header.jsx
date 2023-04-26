import { NavLink } from 'react-router-dom'
import style from './style.module.css'
import logo from '../../logo.svg'
import search from './search.svg'
import mail from './mail.svg'
import internet from './internet.svg'
import { Ticker } from './Ticker/Ticker'

export function Header() {

    return (
        <div className={style.header}>
            <div className={style.header__navigate__box}>
                <div className={style.logo}>
                    <NavLink to=''>
                        <img src={logo} alt='' />
                    </NavLink>
                </div>
                <div className={style.header__navigate}>
                    <ul className={style.navigate}>
                        <li className={style.link}>
                            <NavLink to=''>
                                <div className={style.text}>NEWS</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                <div className={style.text}>INVESTORS</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='' >
                                <div className={style.text}>ABOUT US</div>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={style.navigate}>
                        <li>
                            <NavLink to=''>
                                <div className={style.text}>CAREERS</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                <div className={style.text}>BUSINESSES</div>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={style.navigate}>
                        <li >
                            {/* <Ticker /> */}
                        </li>
                    </ul>
                    <ul className={style.navigate__icon}>
                        <li>
                            <NavLink to=''>
                                <img src={search} alt='' />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                <img src={mail} alt='' />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                <img src={internet} alt='' />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}