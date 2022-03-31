import {
    UPDATE_USER_DETAILS,
    UPLOAD_USER_PICTURE
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

export const DEFAULT_USER = (state) => ({
    id: -1,
    email: "",
    token: undefined,
    firstname: "",
    lastname: "",
    address: {
        country: "",
        town: "",
        zip: "",
        street: ""
    },
    phonenumber: "",
    picture: undefined
});

const getUserDetails = ({
    firstname,
    lastname,
    address: {
        country,
        town,
        zip,
        street
    },
    phonenumber
}) => {
    const details = {
        firstname,
        lastname,
        address: {
            country,
            town,
            zip,
            street
        },
        phonenumber
    };
    return details;
}

export default (
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