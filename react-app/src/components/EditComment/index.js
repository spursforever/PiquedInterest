import React, {useState} from "react";
import { Modal } from "../../context/Modal";
import EditCommentForm from "./editcomment";

const EditCommentModal = ({comments}) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className="" onClick={() => setShowModal(true)}>Edit Comment</button>
             {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditCommentForm onClose={() => setShowModal(false)} comments={comments} />
                </Modal>
            )}
        </>
    )
}

export default EditCommentModal