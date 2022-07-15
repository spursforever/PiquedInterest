import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displayAllPins } from "../../store/pin"
import './allpins.css'

const AllPins = () => {

    const showAllPins = useSelector(state => state.pin)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(displayAllPins())

    }, [dispatch])

    return (
        <div>
            <h1 className="all-pins">All Pins</h1>
            <div className="main-page-container">
                {Object.values(showAllPins).map((pin) => (
                    <div key={pin.id} className="pin-stuff-container">
                        <div className="pin_images_detail">
                            <NavLink key={`${pin?.id}`}
                                to={`/pins/${pin?.id}`}>
                                
                                    <img
                                        className="pin_images"                                        
                                        src={pin?.img_url}
                                    />
                            </NavLink>
                                </div>
                        <div className="pin_title">{pin?.title}</div>
                        </div>

))}
</div>
           


        </div>
    )
}
export default AllPins