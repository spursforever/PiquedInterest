import React, {useState} from "react";
import { ADeletePinModal } from "../../context/Modal";
import DeletePinForm from "./deletepin";


const DeletePinModal = ({pinDetail}) => {

    const [showModal, setShowModal] = useState(false)
    

    return (
        <>
            <button className="delete-pin-button" onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>
            <i class="fa-solid fa-trash"></i>
            </button>
             {showModal && (
                <ADeletePinModal onClose={() => setShowModal(false)}>
                    <DeletePinForm  pinDetail={pinDetail} onClose={() => setShowModal(false)}  />
                </ADeletePinModal>
            )}
        </>
    )
}

export default DeletePinModal