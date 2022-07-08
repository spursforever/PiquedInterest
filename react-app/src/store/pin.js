const ALL_PINS = 'events/ALL_PINS'

export const allPins = (pins) => {
    return {
        type: ALL_PINS,
        pins
    }
}

export const displayAllPins = () => async (dispatch) => {
    const response = await fetch('/api/pins/') 
        if (response.ok) {
        const pins = await response.json();
        dispatch(allPins(pins))
        // console.log()
        return pins
    }
}

const pinsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case ALL_PINS:
            newState = {...state}
            for (let pin of action.pins.pins) {
                newState[pin.id] = pin
            }          
          
            console.log("testttttttttttt", newState)
            return newState;
        default:
            return state;
    }
}

export default pinsReducer