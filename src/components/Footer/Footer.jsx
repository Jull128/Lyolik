import { NavLink } from 'react-router-dom'
import style from './style.module.css'
import vector from './vector.svg'

export function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.footer__navigate__box}>
                <div className={style.footer__navigate}>
                    <ul className={style.navigate}>
                        <li className={style.title}>Join us</li>
                        <li className={style.subtitle}>Bulding  world that works </li>
                        <li className={style.picture}><img src={vector} alt=''></img></li>
                        <li className={style.text}>© 2023 General Electric</li>
                    </ul>
                    <ul className={style.navigate}>
                        <li className={style.link}>
                            <NavLink to=''>
                                <div className={style.text}>CONTACT US</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                <div className={style.text}>COOKIES</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='favorite' >
                                <div className={style.text}>INVESTOR CONTACTS</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='favorite' >
                                <div className={style.text}>PRIVACY</div>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={style.navigate}>
                        <li className={style.link}>
                            <NavLink to=''>
                                <div className={style.text}>TERMS</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to=''>
                                <div className={style.text}>SITE MAP</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='favorite' >
                                <div className={style.text}>ACCESSIBILITY</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='favorite' >
                                <div className={style.text}>PAY TRANSPARENCY</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='favorite' >
                                <div className={style.text}>FRAUD ALERT</div>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={style.navigate}>
                        <li className={style.link}>
                            <NavLink to=''>
                                <div className={style.text}>UK MODERN SLAVERY ACT STATEMENT</div>
                            </NavLink>
                        </li>
                        <li className={style.link}>
                            <NavLink to=''>
                                <div className={style.text}>California transparency in supply chain</div>
                            </NavLink>
                        </li>
                        <li className={style.link}>
                            <NavLink to='favorite' >
                                <div className={style.text}>Integrity at GE</div>
                            </NavLink>
                        </li>
                        <li className={style.link}>
                            <NavLink to='favorite' >
                                <div className={style.text}>Transparency in Coverage Rule</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}