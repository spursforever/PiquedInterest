import React, {useState} from "react";
import { AnEditCommentModal } from "../../context/Modal";
import EditCommentForm from "./editcomment";

const EditCommentModal = ({comment}) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className="" onClick={() => setShowModal(true)}>Edit Comment</button>
             {showModal && (
                <AnEditCommentModal onClose={() => setShowModal(false)}>
                    <EditCommentForm  comment={comment} onClose={() => setShowModal(false)}  />
                </AnEditCommentModal>
            )}
        </>
    )
}

export default EditCommentModal