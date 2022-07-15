import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react"
import { editOnePin, displayOnePin } from "../../store/pin"
import "./updatepin.css"

const UpdateOnePin = ({ pinDetail, onClose }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { pinId } = useParams();
    const pin = useSelector((state) => state?.pin[pinId])
    // const sessionUser = useSelector(state => state?.session.user)
    const [title, setTitle] = useState(pin?.title)
    const [description, setDescription] = useState(pin?.description)
    const [img_url, setImageurl] = useState(pin?.img_url)
    // const [link, setLink] = useState(pin?.link )
    const [errors, setErrors] = useState([])
    // console.log("22222222222222222222",pinId)
    // const newPin = Object.values(pin.pin)
    // console.log("lllllll", newPin.id)
    // console.log(";;;;;;;;;;", pinDetail.id)
    useEffect(() => {
        const validationErrors = [];
        if (!title) {
            validationErrors.push("Please provide pin's title")
        }
        if (title.length > 40) {
            validationErrors.push("You have exceeded title's maximum character limit")
        }
        if (description.length > 160) {
            validationErrors.push("You have exceeded description's maximum character limit")
        }
        if (!img_url) {
            validationErrors.push("Please prove an image url")
        }
        if (!img_url.startsWith("https://")) validationErrors.push("Image url must start in https:// format")
        setErrors(validationErrors)
        if (!img_url.match(/\.(jpeg|jpg|gif|png)$/)) {
            validationErrors.push("Image url must end in a jpeg/jpg/gif/png format")
        }
    }, [title, description, img_url])

    useEffect(() => {
        if (pin) {
            setTitle(pin.title);
            setDescription(pin.description);
            setImageurl(pin.img_url)
            // setLink(pin.link)
        }
    }, [pin])

    const editPinSubmission = async (e) => {
        e.preventDefault();
        const payload = {
            pinId: pinDetail.id,
            title,
            description,
            img_url,
            // link
        }
        const updatedPin = await dispatch(editOnePin(payload));
        if (updatedPin) {
            dispatch(displayOnePin(pinDetail.id))
            // history.push(`/pins/${pinId}`)
            onClose(false)
        }
    }

    return (
        <>
            <div>
                <form onSubmit={editPinSubmission}>
                    <h2 className="edit-pin-text">Edit Pin</h2>
                    <ul>{errors.map((error) => (
                        <li className="edit-pin-errors">
                            {error}
                        </li>))}
                    </ul>
                    <div>
                        <label className="edit-pin-label">Pin's Title </label>
                        <input
                            className="edit-pin-field"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label className="edit-pin-label">Pin's Description (Optional Field) </label>
                        <input
                            className="edit-pin-field"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </input>
                    </div>
                    <div>
                        <label className="edit-pin-label">Pin's Image Url </label>
                        <input
                            className="edit-pin-field"
                            value={img_url}
                            type="text"
                            onChange={(e) => setImageurl(e.target.value)}
                        >
                        </input>
                    </div>
                    <div>
                        <button
                            className="edit-pin-button-modal"
                            type="submit"
                            disabled={errors.length > 0}
                        >Update Pin</button>
                    </div>
                    <div>
                        <button
                            className="cancel-edit-pin-button-modal"
                            type="submit"
                            onClick={onClose}> Cancel Edit</button>
                    </div>


                </form>
            </div>
        </>
    )
}

export default UpdateOnePin