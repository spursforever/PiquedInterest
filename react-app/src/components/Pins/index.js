import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displayAllPins } from "../../store/pin"


const AllPins = () => {

    const showAllPins = useSelector(state=> state.pin)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(displayAllPins()) 
     
    }, [dispatch])   
    
    return (
        <>
        <h1>All Pins</h1>       
        <div>
            {Object.values(showAllPins).map((pin) => (
                  <div>  <NavLink key={`${pin?.id}`}
                to={`/pins/${pin?.id}`}>
                    <div>
                        <img
                        alt={pin?.title}
                        src={pin?.img_url}
                        />                        
                    </div>
        </NavLink>
                    <div>{pin?.title}</div>
        </div>
                 
            ))}
            </div>
            

    </>
    )
}
export default AllPins