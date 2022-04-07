export const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";
export const USER_LOGIN = "LOGIN_USER";
export const FETCH_USER_DETAILS = "FETCH_USER_DETAILS";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_TOKEN = "SET_TOKEN";

export const setToken = ({ token = {access: "", refresh: ""}}) => {
    return dispatch => dispatch({type: SET_TOKEN, payload: token})
}

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
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json()
                    .then(data => ({
                        access: data.access_token,
                        refresh: data.refresh_token
                    }))
                    .then(token => dispatch(fetchUserDetails({ token })))
            })
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
                payload: { token: token, user: user }
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
                payload: { token: token, details: userDetails }
            }))
            .catch(error => console.log("ERROR USER FETCH: ", error))
    }
};

export const userLogout = () => {
    return async dispatch => {
        fetch(`${process.env.REACT_APP_API_URL}/logout`)
            .then(() => dispatch({
                type: LOGOUT_USER
            }));
    }
}
