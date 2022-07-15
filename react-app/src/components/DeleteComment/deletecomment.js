import React from "react"
import { useDispatch } from "react-redux";
import { deleteAComment } from "../../store/comment";
import "./deletecomment.css"

const DeleteCommentForm = ({comment, onClose }) => {
    const dispatch = useDispatch()
    const handleDelete = async (e) => {
        e.preventDefault()
        const data = await dispatch(deleteAComment(comment.id))
        if (data) {
            onClose(false)
        }
    }

    return (
        <>
        <h4 className="question-message">Are you sure you want to delete this comment?</h4> 
        <h3 className="warning-delete-comment">This action is irreversible!!!</h3>
        <button 
        type="submit"
        className="delete-comment-modal-button"
        onClick={handleDelete}>Yes</button>
        <button type="submit" className='cancel-delete-comment-modal-button' onClick={onClose}>Cancel</button>
        </>
    )
}

export default DeleteCommentForm