import { Modal } from "../../Modal/Modal"
import style from './style.module.css'

export function Robotics({ isModalOpen, setIsModalOpen }) {

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
            <div></div>
        </Modal>
    )
}