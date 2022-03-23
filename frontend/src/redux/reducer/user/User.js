import {
    UPDATE_USER_DETAILS,
    UPLOAD_USER_PICTURE
} from '../../action/user/User.js'

export const DEFAULT_USER = (state) => ({
    id: -1,
    email: undefined,
    token: undefined,
    firstname: undefined,
    lastname: undefined,
    adress: undefined,
    phonenumber: undefined,
    picture: undefined
});

const getUserDetails = ({
    firstname,
    lastname,
    adress,
    phonenumber
}) => {
    const detail = {
        firstname,
        lastname,
        adress,
        phonenumber
    };
    return details;
}

const Users = (
    state = [],
    action = {}
) => {
    switch (action.type) {
        case UPDATE_USER_DETAILS:
            return {...state, ...action.payload.user};

        case UPLOAD_USER_PICTURE:
            return {
                ...state,
                ...action.payload.user,
                picture: action.payload.picture
            };

        default:
            return state;
    }
}