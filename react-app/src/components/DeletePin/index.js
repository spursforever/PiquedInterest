import React, {useState} from "react";
import { Modal } from "../../context/Modal";
import DeletePinForm from "./deletepin";


const DeletePinModal = ({pinDetail}) => {

    const [showModal, setShowModal] = useState(false)
    

    return (
        <>
            <button className="" onClick={() => setShowModal(true)}>Delete</button>
             {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeletePinForm  pinDetail={pinDetail} onClose={() => setShowModal(false)}  />
                </Modal>
            )}
        </>
    )
}

export default DeletePinModal