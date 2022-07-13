import React, {useState} from "react";
import { Modal } from "../../context/Modal";
import CreateCommentForm from "./createcomment";

const CreateCommentModal = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className="" onClick={() => setShowModal(true)}>Create Comment</button>
             {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateCommentForm onClose={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    )
}

export default CreateCommentModal