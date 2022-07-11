import {Modal } from "../../context/Modal";
import React, {useState} from "react";
import CreateNewPin from "./createnewpin";


const CreatePinModal = () => {
    const [showModal, setShowModal] = useState(false);
   
    return (
        <>
        <div>
            <div>
        <button onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>Create Pin</button>        
       </div>      
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <CreateNewPin onClose={() => setShowModal(false)} />
        </Modal>
        )}
        </div> 
       
        </>
    )
}

export default CreatePinModal 
            