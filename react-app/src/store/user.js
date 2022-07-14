const ALL_USERS = "user/ALL_USERS"

const allUsers = (users) => {
    return {
        type: ALL_USERS,
        users
    }
}


export const getAllUsers = () => async (dispatch) => {
    const response = await fetch('/api/users/')
    if (response.ok) {
        const users = await response.json()
        dispatch(allUsers(users))
        return users
    }
}

const userReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case ALL_USERS:
            newState = {}
            action.users.users.forEach((user) => {
                newState[user.id] = user
            })
            return newState
        default:
            return state
    }
}
export default userReducer