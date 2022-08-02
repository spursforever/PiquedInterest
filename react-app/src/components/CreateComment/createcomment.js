import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { postNewComment } from "../../store/comment";
import './createcomment.css'

const CreateCommentForm = ({ onClose }) => {
    const { pinId } = useParams()
    console.log("id:", pinId)
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector((state) => state.session.user)

    const [content, setComment] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        const validationErrors = []
        if (!content) {
            validationErrors.push("Please provide a comment")
        } 
        if (content.length > 260) {
            validationErrors.push("You have exceeded maximum character limit")
        }
        setErrors(validationErrors)
    }, [content])

    const commentSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            content,
            user_id: sessionUser.id,
            pin_id: pinId
        }
        const newComment = await dispatch(postNewComment(payload))
        if (newComment) {           
            onClose(false);
        }
    }

    return (
        <div>
            <form onSubmit={commentSubmit}>
                <h2 className="post-comment-text">Post Comment</h2>
                <ul>{errors.map((error) => (
                    <li className="create-comment-errors" key={error}>
                        {error}
                    </li>))}
                </ul>
                <div>
                    <textarea
                        className="create-comment-area"
                        value={content}
                        placeholder="Please provide your thoughts on this pin"
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>

                <div>
                    <button
                        className="create-comment-button-modal"
                        type="submit"
                        disabled={errors.length > 0}
                    >Submit</button>
                </div>
                <div>
                    <button
                        className="cancel-create-comment-button-modal"
                        type="submit"
                        onClick={onClose}>Cancel</button>
                </div>

            </form>
        </div>
    )
}

export default CreateCommentForm;