import { useQuery } from "@tanstack/react-query"
import { Modal } from "../../Modal/Modal"
import style from './style.module.css'

export function Robotics({ isModalOpen, setIsModalOpen }) {

    const categories = 'robotics'
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['news'],
        queryFn: () => fetch('http://localhost:3005/news').then(res => res.json())
    })

    let newsFeed = []
    for (let i = 0; i < data?.length; i++) {
        if (data[i].categories.includes(categories)) {
            newsFeed.push(data[i])
        }
    }

    const closeModalOpen = () => {
        setIsModalOpen(false)
    }

    return (
        <Modal isOpen={isModalOpen} closeHandler={closeModalOpen}>
            <div className={style.container__aero}>
                <div className={style.title__box}>
                    <h4>ROBOTICS</h4>
                    <p>Mr. Fix-It: A Spraying, Snaking Robot Aims to Patch America’s Crumbling Pipelines</p>
                </div>
            </div>
            {newsFeed?.length === 0 ?
                <p className={style.title__card}>There is no news on this category yet</p>
                :
                <div className={style.news__box}>
                    {newsFeed?.map((feed) => (
                        <div key={feed['id']} className={style.card}>
                            <img src={feed.img} alt="" className={style.img} />
                            <p className={style.title__card}>
                                {` ${feed.title}`}
                            </p>
                        </div>
                    ))}
                </div>
            }
        </Modal>
    )
}