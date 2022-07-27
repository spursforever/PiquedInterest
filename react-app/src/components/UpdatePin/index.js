import {AnEditPinModal} from "../../context/Modal";
import UpdateOnePin from "./updatepin";
import React, {useState} from "react";

const UpdatePinModal = ({pinDetail}) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
        <button className="edit-pin-button" onClick={()=> setShowModal(true)} style={{ cursor: 'pointer' }} >
        <i class="fa-solid fa-ellipsis"></i>
        </button>
        {showModal && (
        <AnEditPinModal onClose={() => setShowModal(false)}>
          <UpdateOnePin onClose={() => setShowModal(false)} pinDetail={pinDetail}/>
        </AnEditPinModal>
        )}
        </>
    )
}

export default UpdatePinModal