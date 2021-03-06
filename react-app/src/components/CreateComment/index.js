import React, {useState} from "react";
import {ACreateCommentModal } from "../../context/Modal";
import CreateCommentForm from "./createcomment";

const CreateCommentModal = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className="create-comment-button" onClick={() => setShowModal(true)} style={{ cursor: 'pointer' }}>
            <i class="fa-solid fa-plus"></i>
            </button>
             {showModal && (
                <ACreateCommentModal onClose={() => setShowModal(false)}>
                    <CreateCommentForm onClose={() => setShowModal(false)} />
                </ACreateCommentModal>
            )}
        </>
    )
}

export default CreateCommentModal