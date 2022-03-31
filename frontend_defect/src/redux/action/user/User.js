import {apiPath, asyncDispatch} from "../../api.js";

export const UPDATE_USER_DETAILS = "update_user_details";
export const UPLOAD_USER_PICTURE = "upload_user_picture";

const apiSubPath = "/user";
const url = apiPath;

export const updateUserDetails = user => {
    return async dispatch => {
        asyncDispatch({
            content: user,
            method: "POST",
            url,
            type: UPDATE_USER_DETAILS,
            payload: { user }
        });
    };
};

export const uploadUserPicture = (user, picture) => {
    return async dispatch => {
        asyncDispatch({
            content: {
                userid: user.id,
                picture
            },
            method: "POST",
            url,
            type: UPLOAD_USER_PICTURE,
            payload: { user, picture }
        });
    };
};

