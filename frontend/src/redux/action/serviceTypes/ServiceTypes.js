export const FETCH_SERVICETYPES = "FETCH_SERVICETYPES";

export const fetchServiceTypes = ({ token }) => {

    return async dispatch => {
        fetch(`${process.env.REACT_APP_API_URL}/api/service/types`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token?.access ?? token}`
            },
            mode: "cors",
            redirect: "follow"
        })
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json()
                    .then(serviceTypesToAdd => dispatch({
                        type: FETCH_SERVICETYPES,
                        payload: serviceTypesToAdd
                    }))
            })
            .catch(err => console.log("ERROR FETCHING SERVICETYPESS: ", err));
    }
}