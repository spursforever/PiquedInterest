const GET ='comments/GET'
const POST = 'comments/POST'
// const  = 'comments/UPDATE'

const allComments = (comments) => {
    return {
        type: GET,
        comments
    }
}

const postComment = (comment) => {
    return {
        type: POST,
        comment
    }
}

const updateComment = (comment) => {
    return {
        type: POST,
        comment
    }
}

export const getAllComments = () => async (dispatch) => {
    const response = await fetch(`/api/comments/`);
    if (response.ok) {
        const comment = await response.json();
        dispatch(allComments(comment))
        return comment
    }
}

export const postNewComment = (data) => async (dispatch) => {
    const response = await fetch('/api/comments/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        const newComment = await response.json()
        dispatch(postComment(newComment))
        return newComment
}
}

export const updateAComment = (commentId, payload) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}/update`, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
    })
    if (response.ok) {
        const oneComment = await response.json();
        dispatch(updateComment(oneComment))
        return oneComment
    }
}

const commentReducer = (state ={}, action) => {
    let newState;
    switch (action.type) {
        case GET: 
            newState = {...state}
            action.comments.comments.forEach((comment) => {
                newState[comment.id] = comment
            })
            return newState                  
        
        case POST: {
            newState = {...state}
            newState[action.comment.pin.id] = action.comment
            return newState;
        } 
        default:
                return state
    }
}


export default commentReducer