import { NavLink } from 'react-router-dom'
import style from './style.module.css'
import logo from '../../logo.svg'
import poligon from './Polygon.svg'
import poligonGreen from './PolygonGreen.svg'


export function Header({ price }) {

    //regularMarketChange - изменение цены

    return (
        <div className={style.header}>
            <div className={style.header__navigate__box}>
                <div className={style.logo}><img src={logo} /></div>
                <div className={style.header__navigate}>
                    <ul className={style.navigate}>
                        <li className={style.link}>
                            <NavLink to=''>
                                <p className={style.text}>NEWS</p>
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
                    </ul>
                    <ul className={style.navigate}>
                        <li>
                            <NavLink to=''>
                                <p className={style.text}>CAREERS</p>
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
                            <NavLink className={style.ticker} to=''>
                                <p className={style.text}>{`GE `}</p>
                                <img src={poligon} />
                                <p className={style.text}>{` ${price}`}</p>
                            </NavLink>
                        </li>
                    </ul>
                    <ul className={style.navigate}>
                        <li>
                            <NavLink to=''>
                                <p className={style.text}>GE</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={style.container}>
                <div className={style.title__box}>
                    <p className={style.title__text}>Propelling <span>ge</span> intro a new Era</p>
                    <img className={style.banner} src='https://www.ge.com/sites/default/files/2020-04/City_Image_Narrow.jpg' />
                </div>
                <div className={style.button}>
                    <button>22 annual report</button>
                </div>
            </div>
        </div>
    )
}