const ALL_PINS = 'pins/ALL_PINS'
const GET_ONE_PIN = 'pins/GET_ONE_PIN'
const CREATE_PIN = 'pins/CREATE_PIN'

const allPins = (pins) => {
    return {
        type: ALL_PINS,
        pins
    }
}

const singlePin = (pin) => {
    return {
        type: GET_ONE_PIN,
        pin
    }
}

const createPin = (pin) => {
    return {
        type: CREATE_PIN,
        pin
    }
}

export const displayAllPins = () => async (dispatch) => {
    const response = await fetch('/api/pins') 
        if (response.ok) {
        const pins = await response.json();
        dispatch(allPins(pins))
        // console.log()
        return pins
    }
}

export const displayOnePin = (id) => async (dispatch) => {
    const response = await fetch(`/api/pins/${id}`)
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!", response)
    
    if (response.ok) {
        const pin = await response.json();
        console.log("11111111111111111", pin)
        dispatch(singlePin(pin))
        return pin
    }   
}

export const createOnePin = (data) => async (dispatch) => {
    const response = await fetch(`/api/pins`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        const newPin = await response.json()
        dispatch(createPin(newPin))
        return newPin
    }
}

const pinsReducer = (state = {}, action) => {
    let newState = {};
    switch (action.type) {
        case ALL_PINS:
            newState = {...state}
            for (let pin of action.pins.pins) {
                newState[pin.id] = pin
            }        
          // console.log("testttttttttttt", newState)
            return newState;
        case GET_ONE_PIN:
            newState = {...state}
            newState[action.pin.id] = action.pin
            return newState;
        case CREATE_PIN:
            newState = {...state}
            newState[action.pin.id] = action.pin
            return newState;
        default:
            return state;
    }
}

export default pinsReducer