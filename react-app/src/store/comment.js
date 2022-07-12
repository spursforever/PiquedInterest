const GET ='comments/GET'
const POST = 'comments/POST'

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

const commentReducer = (state ={}, action) => {
    let newState;
    switch (action.type) {
        case GET: {
            newState = {...state}
            action.comments.comments.forEach((comment) => {
                newState[comment.id] = comment
            })
            return newState
            }       
        
        case POST: {
            return { [action.comment.id]: action.comment, ...state };
        } 
        default:
                return state
    }
}


export default commentReducer