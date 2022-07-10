import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displayAllPins } from "../../store/pin"
import CreatePinModal from "../CreatePin";

const AllPins = () => {

    const showAllPins = useSelector(state=> state.pinsReducer)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(displayAllPins()) 
     
    }, [dispatch])   
    
    return (
        <>
        <h1>All Pins</h1>
        <CreatePinModal />
        <div>
            {Object.values(showAllPins).map((pin) => (
                  <div>  <Link key={`${pin?.id}`}
                to={`/pins/${pin?.id}`}>
                    <div>
                        <img
                        alt={pin?.title}
                        src={pin?.img_url}
                        />                        
                    </div>
                    <div>{pin?.title}</div>
        </Link>
        </div>
                 
            ))}
            </div>
            

    </>
    )
}
export default AllPins