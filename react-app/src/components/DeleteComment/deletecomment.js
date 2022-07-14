import React from "react"
import { useDispatch } from "react-redux";
import { deleteAComment } from "../../store/comment";

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
        <h3>Are you sure you want to delete this comment? This action is irreversible!</h3>
        <button 
        type="submit"
        onClick={handleDelete}>Yes</button>
        <button type="submit" onClick={onClose}>Cancel</button>
        </>
    )
}

export default DeleteCommentForm