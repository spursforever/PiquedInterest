import React, {useState} from "react";
import { Modal } from "../../context/Modal";
import DeleteCommentForm from "./deletecomment";


const DeleteCommentModal = ({comment}) => {

    const [showModal, setShowModal] = useState(false)
    

    return (
        <>
            <button className="" onClick={() => setShowModal(true)}>Delete</button>
             {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteCommentForm  comment={comment} onClose={() => setShowModal(false)}  />
                </Modal>
            )}
        </>
    )
}

export default DeleteCommentModal