import React from "react"
import { useDispatch } from "react-redux";
import { deleteAPin } from "../../store/pin";
import { useParams, useHistory } from "react-router-dom";

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
        <h3>Are you sure you want to delete this pin? This action is irreversible!</h3>
        <button 
        type="submit"
        onClick={handleDelete}>Yes</button>
        <button type="submit" onClick={onClose}>Cancel</button>
        </>
    )
}

export default DeletePinForm