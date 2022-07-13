import { useDispatch, useSelector } from "react-redux"
import { useHistory, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react"
import { createOnePin, displayAllPins } from "../../store/pin"

const CreateNewPin = ({ onClose }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [img_url, setImageurl] = useState("")
    const [link, setLink] = useState("")
    const [errors, setErrors] = useState([])
    // useEffect(() => {
    //     const validationErrors = [];
    //     if (!title) {
    //         validationErrors.push("Please provide pin's title")
    //     }
    //     if (!img_url) {
    //         validationErrors.push("Please prove an image url")
    //     } setErrors(validationErrors)
    // }, [title, img_url])

    if (!sessionUser) return <Redirect to="/" />;

    const pinSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            title,
            description,
            img_url,
            link
        }
        const validationErrors = [];
        if (!title) {
            validationErrors.push("Please provide pin's title")
        }
        if (!img_url) {
            validationErrors.push("Please prove an image url")
        } setErrors(validationErrors)
        if (!validationErrors.length) {
            const data = await dispatch(createOnePin(payload))
            await dispatch(displayAllPins())
            if (data?.errors) {
                setErrors(data.errors)
            } else {
                // onClose(false)
            }
        }
    }

    return (        
            <div>
                <form onSubmit={pinSubmit}>
                    <h2>Create Your favorite Pin!</h2>
                    <ul>{errors.map((error) => (
                        <li className="">
                            {error}
                        </li>))}
                    </ul>
                    <div>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Please enter pin's title"
                        ></input>
                    </div>
                    <div>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Please enter pin's description (optional)"
                        >
                        </input>
                    </div>
                    <div>
                        <input
                            value={img_url}
                            onChange={(e) => setImageurl(e.target.value)}
                            placeholder="Please enter image url"
                        >
                        </input>
                    </div>
                    <div>
                        <input
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Please enter link related to the pin (optional)"
                        >
                        </input>
                    </div>
                    <button
                        className="submit_event"
                        type="submit"
                        disabled={errors.length > 0}
                    >Submit Pin</button>

                </form>
            </div>        
    )
}

export default CreateNewPin