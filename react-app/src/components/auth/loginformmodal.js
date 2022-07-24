import React, {useState} from "react";
import { ALoginModal } from "../../context/Modal";
import LoginForm from "./LoginForm";

const LoginFormModal = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className="log-in-button" onClick={() => setShowModal(true)}>Log In</button>
             {showModal && (
                <ALoginModal onClose={() => setShowModal(false)}>
                    <LoginForm onClose={() => setShowModal(false)} />
                </ALoginModal>
            )}
        </>
    )
}

export default LoginFormModal