import { NewPinModal } from "../../context/Modal";
import React, {useState} from "react";
import CreateNewPin from ".";


const CreatePinModal = () => {
    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);
    };
    return (
        <>       
        <button onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>Create Pin</button>         
        {showModal && (
        <NewPinModal onClose={() => setShowModal(false)}>
            <CreateNewPin onClose={onCloseModal} />
        </NewPinModal>
        )}
        
       
        </>
    )
}

export default CreatePinModal 
            