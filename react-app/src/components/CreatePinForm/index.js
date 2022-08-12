import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react"
import { createOnePin } from "../../store/pin"
import "./createpinform.css"

const CreateNewPin = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [img_url, setImageurl] = useState("")
    
    const [errors, setErrors] = useState([])   
 
    const pinSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            title,
            description,
            img_url,
            
        }
        const validationErrors = [];
        if (!title) {
            validationErrors.push("Please provide pin's title")
        }
        if (title.length > 50) {
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
        
        const newPin = await dispatch(createOnePin(payload))
        if (newPin) {
            history.push('/')
           
        }
    }
    const homePage = () => {
        history.push('/')
    }

    return (        
            <div className="create-pin-page-container">
                    <h2 className="create-welcome">Create Your favorite Pin!</h2>
                <form className="create-pin-form" onSubmit={pinSubmit}>
                    <div className="create-pin-page-error-container">
                    {errors.map((error) => (
                        <div className="create-pin-errors">
                            {error}
                        </div>))}                        
                    </div>
                    <div className="create-pin-form-container">
                        <div className="create-pin-form-detail-container">
                        <label className="create-pin-label">Pin's Title </label>
                        <input
                            className="create-pin-form-input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}                            
                        ></input>
                    </div>
                    <div>
                    <label className="create-pin-label">Pin's Description (Optional Field) </label>
                        <input
                        className="create-pin-form-input"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}                           
                        >
                        </input>
                    </div>
                    <div>
                    <label className="create-pin-label">Pin's Image Url </label>
                        <input
                        className="create-pin-form-input"
                            value={img_url}
                            onChange={(e) => setImageurl(e.target.value)}                            
                        >
                        </input>
                    </div>                   
                    <button
                        className="create-pin-page-button"
                        type="submit"
                        disabled={errors.length > 0}
                    >Submit Pin</button>
                    <button 
                    className="cancel-create-pin-page-button"
                    type="submit"
                    onClick={homePage}> Cancel </button> 
                    </div>
                </form>
            </div>        
    )
}

export default CreateNewPin