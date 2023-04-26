import { Modal } from "../../Modal/Modal"


export function OpenCard({ isModalOpen, setIsModalOpen }) {

    const closeModalOpen = () => {
        setIsModalOpen(false)
    }

    return (
        <Modal isOpen={isModalOpen} closeHandler={closeModalOpen}>

        </Modal>
    )
}