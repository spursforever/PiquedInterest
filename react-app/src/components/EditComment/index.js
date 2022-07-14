import React, {useState} from "react";
import { Modal } from "../../context/Modal";
import EditCommentForm from "./editcomment";

const EditCommentModal = ({comment}) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className="" onClick={() => setShowModal(true)}>Edit Comment</button>
             {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditCommentForm  comment={comment} onClose={() => setShowModal(false)}  />
                </Modal>
            )}
        </>
    )
}

export default EditCommentModal