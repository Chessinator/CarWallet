import { asyncDispatch } from "../../api.js";
import { useDispatch } from "react-redux";

export const UPDATE_USER_DETAILS = "update_user_details";
export const UPLOAD_USER_PICTURE = "upload_user_picture";
export const USER_LOGIN = "user_login";
export const FETCH_USER_DETAILS = "fetch_user_details";


const url = `${process.env.REACT_APP_API_URL}/api/user`;

export const userLogin = ({ email, password }) => {

    return async dispatch => {
        var loginHeader = new Headers();
        loginHeader.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        var loginRequest = {
            method: 'POST',
            headers: loginHeader,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, loginRequest)
            .then(response => response.json())
            .then(json => { console.log("json: ", json); return json })
            .then(data => ({
                access: data.access_token,
                refresh: data.refresh_token
            }))
            /*.then(token => setToken(token))*/
            .then(token => fetchUserDetails({ token }).dispatch)
            /*.then(_data => navigate("../dashboard"))*/
            .catch(error => console.log("ERROR USER LOGIN: ", error));
    }
}

export const fetchUserDetails = ({ token }) => {
    console.log("fetch user details triggered with token 1:", token)
    return async dispatch => {
        console.log("fetch user details triggered with token 2:", token)
        fetch(`${process.env.REACT_APP_API_URL}/api/user`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token.access}`
            },
            redirect: 'follow'
        })
            .then(res => { console.log("res: ", res); return res })
            .then(res => res.json())
            .then(user => { console.log("userdetails:", user); return user })
            .then(user => dispatch({
                type: FETCH_USER_DETAILS,
                payload: user
            }))
            .catch(error => console.log("ERROR USER FETCH: ", error))
    }
}


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
