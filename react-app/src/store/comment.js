const ALL_COMMENTS ='comments/ALL_COMMENTS'

const allComments = (comments) => {
    type: ALL_COMMENTS,
    comments
}

export const getAllComments = (pinId) => async (dispatch) => {
    const response = await fetch(`/api/comments/${pinId}`);
    if (response.ok) {
        const comment = await response.json();
        dispatch(allComments(comment))
        return comment
    }
}
const commentReducer = (state ={}, action) => {
    switch (action.type) {
        case ALL_COMMENTS: {
            const newState = {}
            action.comments.forEach(comment => {
                newState[comment.id] = comment
            })
            return {
                ...newState, ...state
            }       
        } 
        default:
                return state
    }
}

export default commentReducer