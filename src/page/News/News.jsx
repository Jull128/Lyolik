import { useQuery } from '@tanstack/react-query'
import style from './style.module.css'

export function News() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['news'],
        queryFn: () => fetch('http://localhost:3005/news').then(res => res.json())
    })
    return (
        <div className={style.container}>
            <div className={style.news__box}>
                {data?.map((feed) => (
                    <div key={feed['id']} className={style.card}>
                        <img src={feed.img} alt="" className={style.img} />
                        <p className={style.title__card}>
                            {` ${feed.title}`}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}