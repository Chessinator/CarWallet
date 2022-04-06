import { asyncDispatch } from "../../api.js";
import { useDispatch } from "react-redux";

export const UPDATE_USER_DETAILS = "update_user_details";
export const UPLOAD_USER_PICTURE = "upload_user_picture";
export const USER_LOGIN = "user_login";
export const FETCH_USER_DETAILS = "fetch_user_details";
export const LOGOUT_USER = "logout_user";


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
            .then(data => ({
                access: data.access_token,
                refresh: data.refresh_token
            }))
            .then(token => dispatch(fetchUserDetails({ token })))
            .catch(error => console.log("ERROR USER LOGIN: ", error));
    }
}

export const fetchUserDetails = ({ token }) => {
    return async dispatch => {
        fetch(`${process.env.REACT_APP_API_URL}/api/user`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token.access}`
            },
            redirect: 'follow'
        })
            .then(res => res.json())
            .then(user => dispatch({
                type: FETCH_USER_DETAILS,
                payload: {token: token, user: user}
            }))
            .catch(error => console.log("ERROR USER FETCH: ", error))
    }
}


export const updateUserDetails = user => {
    return async dispatch => {
        const { token, details } = user;
        fetch(`${process.env.REACT_APP_API_URL}/api/user`, {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${token.access}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details),
            mode: "cors",
            redirect: 'follow',
        })
            .then(res => res.json())
            .then(userDetails => dispatch({
                type: UPDATE_USER_DETAILS,
                payload: {token: token, details: userDetails}
            }))
            .catch(error => console.log("ERROR USER FETCH: ", error))
    }
};

export const userLogout = () => {
    return async dispatch =>{
        fetch(`${process.env.REACT_APP_API_URL}/logout`)
        .then(() => dispatch({
            type: LOGOUT_USER
        }));
    }
}
