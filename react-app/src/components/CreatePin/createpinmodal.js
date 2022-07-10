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
        <div>
            <div>
                 <button onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>Create Pin</button>
            </div>
            
        {showModal && (
        <NewPinModal onClose={() => setShowModal(false)}>
            <CreateNewPin onClose={onCloseModal} />
        </NewPinModal>
        )}
        </div>
       
        </>
    )
}

export default CreatePinModal 