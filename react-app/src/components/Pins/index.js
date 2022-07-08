import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { displayAllPins } from "../../store/pin"
import pinsReducer from "../../store/pin";

const AllPins = () => {
    const [allPins, setAllPins] = useState([])
    const user = useSelector(state => state.session.user)
    const showAllPins = useSelector(state=> state.pinsReducer)
    const dispatch = useDispatch()
    const pinDisplay = useSelector((staus) => staus.pin)

    useEffect(() => {
        dispatch(displayAllPins()) 
     
    }, [dispatch])

    useEffect(() => {
        if (pinDisplay) {
            setAllPins(Object.values(pinDisplay))
        }
    }, [pinDisplay])
    
    return (
        <>
        <h1>All Pins</h1>
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