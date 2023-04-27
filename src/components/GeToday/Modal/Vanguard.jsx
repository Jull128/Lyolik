import { Modal } from "../../Modal/Modal"
import style from './style.module.css'

export function Vanguard({ isModalOpen, setIsModalOpen }) {

    const closeModalOpen = () => {
        setIsModalOpen(false)
    }

    return (
        <Modal isOpen={isModalOpen} closeHandler={closeModalOpen}>
            <div className={style.container__vanguard}>
                <div className={style.title__box}>
                    <h4>THE  VANGUARD</h4>
                    <p>The 5 Coolest Things on Earth This Week</p>
                </div>
            </div>
            <div></div>
        </Modal>
    )
}