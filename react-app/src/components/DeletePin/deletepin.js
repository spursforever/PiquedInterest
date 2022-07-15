import React from "react"
import { useDispatch } from "react-redux";
import { deleteAPin } from "../../store/pin";
import { useParams, useHistory } from "react-router-dom";
import "./deletepin.css"

const DeletePinForm = ({ pinDetail, onClose }) => {
    const dispatch = useDispatch()
    // const {id} = useParams()
    // console.log('pinDetail!!!!!!!!!!!', pinDetail)
    const history = useHistory()
    const handleDelete = async (e) => {
        e.preventDefault()
        const data = await dispatch(deleteAPin(pinDetail.id))
        if (data) {            
            onClose(false)
            history.push('/')
        }
    }

    return (
        <>
        <h3 className="regular-message">Are you sure you want to delete this pin? </h3>
        <h2 className="warning-delete">This action is irreversible!!!</h2>
        <button 
        className="delete-pin-modal-button"
        type="submit"
        onClick={handleDelete}>Yes</button>
        <button className="cancel-delete-pin-modal-button" type="submit" onClick={onClose}>Cancel</button>
        </>
    )
}

export default DeletePinForm