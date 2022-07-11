import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react"
import { editOnePin } from "../../store/pin"


const UpdateOnePin = ({ onClose, pinId }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams();
    const pin = useSelector((state) => state?.pin[id])
    const updatedPinId = useSelector((state) => state.pin[pinId].pin?.id)
    const sessionUser = useSelector(state => state.session.user)
    const [title, setTitle] = useState(pin.pin?.title)
    const [description, setDescription] = useState(pin.pin?.description)
    const [img_url, setImageurl] = useState(pin.pin?.img_url )
    const [link, setLink] = useState(pin.pin?.link )
    const [errors, setErrors] = useState([])
    console.log("22222222222222222222", updatedPinId)
    
    useEffect(() => {
        const validationErrors = [];
        if (!title) {
            validationErrors.push("Please provide pin's title")
        }
        if (!img_url) {
            validationErrors.push("Please prove an image url")
        } setErrors(validationErrors)
    }, [title, img_url])

    useEffect(() => {
        if (pin) {
            setTitle(pin.pin?.title);
            setDescription(pin.pin?.description);
            setImageurl(pin.pin?.img_url)
            setLink(pin.pin?.link)
        }
    }, [pin])

    const editPinSubmission = async (e) => {
        e.preventDefault();
        const payload = {
            pinId: sessionUser?.id,            
            title,
            description,
            img_url,
            link
        }
        const updatedPin = await dispatch(editOnePin(updatedPinId, payload));
        if (updatedPin) {
            history.push(`/pins/${updatedPinId}`)
            onClose(false)
        }
    }  

    return (
        <>
            <div>
                <form onSubmit={editPinSubmission}>
                    <h2>Edit Pin</h2>
                    <ul>{errors.map((error) => (
                        <li className="error_info">
                            {error}
                        </li>))}
                    </ul>
                    <div>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}                            
                        ></input>
                    </div>
                    <div>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}                            
                        >
                        </input>
                    </div>
                    <div>
                        <input
                            value={img_url}
                            type="text"
                            onChange={(e) => setImageurl(e.target.value)}                           
                        >
                        </input>
                    </div>
                    <div>
                        <input
                            value={link}
                            onChange={(e) => setLink(e.target.value)}                            
                        >
                        </input>
                    </div>
                    <button
                        className="submit_event"
                        type="submit"
                        disabled={errors.length > 0}
                    >Update Pin</button>
                    <button 
                type="submit"
                onClick={onClose}> Cancel Edit</button>

                </form>
            </div>
        </>
    )
}

export default UpdateOnePin