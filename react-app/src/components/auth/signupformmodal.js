import React, {useState} from "react";
import { ASignupModal } from "../../context/Modal";
import SignUpForm from "./SignUpForm";

const SignUpFormModal = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className="sign-up-button" style={{ cursor: 'pointer' }} onClick={() => setShowModal(true)}>Sign Up</button>
             {showModal && (
                <ASignupModal onClose={() => setShowModal(false)}>
                    <SignUpForm onClose={() => setShowModal(false)} />
                </ASignupModal>
            )}
        </>
    )
}

export default SignUpFormModal