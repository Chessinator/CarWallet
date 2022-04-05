import {
    UPDATE_USER_DETAILS,
    UPLOAD_USER_PICTURE,
    USER_LOGIN,
    FETCH_USER_DETAILS
} from '../../action/user/User.js'

/*
    {
        id: 0,
        email: "user1@email.test",
        token: "1234567.9012345ffoij.fg34f2",
        firstname: "Karl",
        lastname: "User",
        address: {
            street: "Street 123",
            zip: "38444",
            town: "Wolfsburg",
            country: "Germany"
        },
        phonenumber: "0180 123 456 789",
        picture: user0imageBase64
    },
*/

export default (
    state = [],
    action = {}
) => {
    switch (action.type) {
        case USER_LOGIN:
            return {...state, user: action.payload.user}

        case FETCH_USER_DETAILS:
            return {...state, user: action.payload};
            
        case UPDATE_USER_DETAILS:
            return {...state, ...action.payload};

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