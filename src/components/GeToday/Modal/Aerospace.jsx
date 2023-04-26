import { Modal } from "../../Modal/Modal"
import style from './style.module.css'

export function Aerospace({ isModalOpen, setIsModalOpen }) {

    const closeModalOpen = () => {
        setIsModalOpen(false)
    }

    return (
        <Modal isOpen={isModalOpen} closeHandler={closeModalOpen}>
            <div className={style.container__aero}>
                <div className={style.title__box}>
                    <h4>GE AEROSPACE</h4>
                    <p>We’ve been a driving force for flight for over 100 years.</p>
                </div>
            </div>
            <div></div>
        </Modal>
    )
}