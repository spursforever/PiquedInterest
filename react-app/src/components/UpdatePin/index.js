import {Modal} from "../../context/Modal";
import UpdatePin from "./updatepin";
import React, {useState} from "react";

const UpdatePinModal = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
        <button className="" onClick={()=> setShowModal(true)} style={{ cursor: 'pointer' }} >Edit Pin</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdatePin onClose={() => setShowModal(false)}/>
        </Modal>
        )}
        </>
    )
}

export default UpdatePinModal