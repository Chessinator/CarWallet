import {
    UPDATE_USER_DETAILS,
    USER_LOGIN,
    FETCH_USER_DETAILS
} from '../../action/user/User.js'

const User = (
    state = { token : undefined, details : undefined },
    action = {}
) => {
    switch (action?.type) {
        case USER_LOGIN:
            return { details: undefined, token: action.payload };

        case FETCH_USER_DETAILS:
            return { details: action.payload.user, token: action.payload.token };
            
        case UPDATE_USER_DETAILS:
            return { ...state, details: {...state.details, ...action.payload.details} };

        default:
            return state;
    }
}

export default User;