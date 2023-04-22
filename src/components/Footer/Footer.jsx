import { NavLink } from 'react-router-dom'
import style from './style.module.css'
import vector from './vector.svg'

export function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footer__navigate__box}>
                <div className={style.footer__navigate}>
                    <div className={style.link}>
                        <p>Join us</p>
                        <p>Bulding  world that works </p>
                        <img src={vector}></img>
                        <p>© 2023 General Electric</p>
                    </div>
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
                            <NavLink to='favorite' >
                                <div className={style.text}>ABOUT US</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='favorite' >
                                <div className={style.text}>ABOUT US</div>
                            </NavLink>
                        </li>
                    </ul>
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
                            <NavLink to='favorite' >
                                <div className={style.text}>ABOUT US</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='favorite' >
                                <div className={style.text}>ABOUT US</div>
                            </NavLink>
                        </li>
                    </ul>
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
                            <NavLink to='favorite' >
                                <div className={style.text}>ABOUT US</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='favorite' >
                                <div className={style.text}>ABOUT US</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}