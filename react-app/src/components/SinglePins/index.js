import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { displayOnePin } from "../../store/pin";
import { useSelector, useDispatch } from "react-redux";

const PinDetailPage = () => {
    const dispatch = useDispatch()
    const pin = useSelector((state) => state.pinsReducer)
    const {id} = useParams()
    // const sessionUser = useSelector((state) => state.session.user?.id)
    
    useEffect(() => {
        dispatch(displayOnePin(id))
    }, [dispatch, id])
    
    

    return (
        <div>
            <div>
                <img
            alt={pin.title}
            src={pin.image_url} />
            </div>
            <div>Pin Title: {pin.title}</div>
            <div>Pin Description: {pin.description}</div>
            <div>{pin.link}</div>
        </div>
        
    )
}

export default PinDetailPage