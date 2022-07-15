import { useDispatch, useSelector } from "react-redux"
import { useHistory, Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react"
import { createOnePin, displayAllPins } from "../../store/pin"

const CreateNewPin = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [img_url, setImageurl] = useState("")
    // const [link, setLink] = useState("")
    const [errors, setErrors] = useState([])
    
    useEffect(() => {
        const validationErrors = [];
        if (!title) {
            validationErrors.push("Please provide pin's title")
        }
        if (title.length > 80) {
            validationErrors.push("You have exceeded title's maximum character limit")
        }
        if (description.length > 160) {
            validationErrors.push("You have exceeded description's maximum character limit")
        }
        if (!img_url) {
            validationErrors.push("Please prove an image url")
        } 
        if (!img_url.match(/\.(jpeg|jpg|gif|png)$/)) {
            validationErrors.push("Image url must end in a jpeg/jpg/gif/png format")
        }
        if(!img_url.startsWith("https://")) validationErrors.push("Image url must start in https:// format") 
        setErrors(validationErrors)
    }, [title, description, img_url])   

    const pinSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            title,
            description,
            img_url,
            
        }
        const newPin = await dispatch(createOnePin(payload))
        if (newPin) {
            history.push('/')
            // onClose(false)
        }
    }
    const homePage = () => {
        history.push('/')
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
                        <label>Pin's Title </label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}                            
                        ></input>
                    </div>
                    <div>
                    <label>Pin's Description (Optional Field) </label>
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}                           
                        >
                        </input>
                    </div>
                    <div>
                    <label>Pin's Image Url </label>
                        <input
                            value={img_url}
                            onChange={(e) => setImageurl(e.target.value)}                            
                        >
                        </input>
                    </div>
                    {/* <div>
                        <input
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Please enter link related to the pin (optional)"
                        >
                        </input>
                    </div> */}
                    <button
                        className="submit_event"
                        type="submit"
                        disabled={errors.length > 0}
                    >Submit Pin</button>
                    <button type="submit"
                    onClick={homePage}> Cancel </button> 

                </form>
            </div>        
    )
}

export default CreateNewPin