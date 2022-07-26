import React, {useState} from "react";
import {ADeleteCommentModal } from "../../context/Modal";
import DeleteCommentForm from "./deletecomment";


const DeleteCommentModal = ({comment}) => {

    const [showModal, setShowModal] = useState(false)
    

    return (
        <>
            <button className="" onClick={() => setShowModal(true)}>
            <i class="fa-solid fa-trash-can"></i>
            </button>
             {showModal && (
                <ADeleteCommentModal onClose={() => setShowModal(false)}>
                    <DeleteCommentForm  comment={comment} onClose={() => setShowModal(false)}  />
                </ADeleteCommentModal>
            )}
        </>
    )
}

export default DeleteCommentModal