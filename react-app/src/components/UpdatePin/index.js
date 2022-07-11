import {Modal} from "../../context/Modal";
import UpdateOnePin from "./updatepin";
import React, {useState} from "react";

const UpdatePinModal = () => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
        <button className="" onClick={()=> setShowModal(true)} style={{ cursor: 'pointer' }} >Edit Pin</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateOnePin onClose={() => setShowModal(false)}/>
        </Modal>
        )}
        </>
    )
}

export default UpdatePinModal