import { NavLink } from 'react-router-dom'
import style from '../style.module.css'
import poligon from '../Polygon.svg'
import poligonGreen from '../PolygonGreen.svg'
import { useQuery } from '@tanstack/react-query'
import { api } from '../../../api'


export function Ticker() {

    const {
        data, isLoading, error
    } = useQuery({
        queryKey: ['ticker'],
        queryFn: async () => api.getTicker(),
    })
    console.log(data);

    let price = data?.regularMarketPrice.toFixed(2);
    let marketPrice = data?.regularMarketChange;

    if (isLoading) return (<div className={style.lds_ripple}><div></div><div></div></div>);
    if (error) return <p className={style.ticker} ></p>;

    return (
        <NavLink className={style.ticker} to=''>
            <>
                <p className={style.text__ticker}>{`GE `}</p>

                {marketPrice > 0 ?
                    <img className={style.poligon} src={poligonGreen} alt='' />
                    :
                    <img className={style.poligon} src={poligon} alt='' />
                }
                <p className={style.text__ticker}>{`${price}`}</p>
            </>
        </NavLink>
    )
}