const GET ='comments/GET'
const POST = 'comments/POST'
const DELETE = 'comments/DELETE'

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

const deleteComment = (comment) => {
    return {
        type: DELETE,
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

export const postNewComment = (payload) => async (dispatch) => {    
    const response = await fetch('/api/comments/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const newComment = await response.json()
        dispatch(postComment(newComment))
        return newComment
}
}

export const updateAComment = ( payload) => async (dispatch) => {
    const response = await fetch(`/api/comments/${payload.id}/update`, {
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

export const deleteAComment = (commentId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",        
    })
    if (response.ok) {
        const remove = await response.json()
        await dispatch(deleteComment(remove))
       
    }
}

const commentReducer = (state ={}, action) => {
    let newState;
    switch (action.type) {
        case GET: 
            newState = {}            
            action.comments.comments.forEach((comment) => {                
                newState[comment.id] = comment
            })
            return {...newState}                  
        
        case POST: 
            newState = {...state}            
            newState[action.comment.id] = action.comment
            return newState;
        
        case DELETE:
            newState = {...state}
            delete newState[action.comment.id]
            return newState
        default:
                return state
    }
}


export default commentReducer