export const FETCH_SERVICE = "FETCH_SERVICE";
export const ADD_SERVICE = "ADD_SERVICE";
export const UPDATE_SERVICE = "UPDATE_SERVICE";

export const fetchService = ({ token, vehicle }) => {

    return async dispatch => {
        const fetchServicesReq = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        await fetch(`${process.env.REACT_APP_API_URL}/api/service?vehicle_id?${vehicle.id}`, fetchServicesReq)
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json()
                    .then(serviceToAdd => dispatch({
                        type: FETCH_SERVICE,
                        payload: serviceToAdd
                    }))
            })
            .catch(err => console.log("ERROR FETCHING SERVICES: ", err));
    }
}

export const addService = ({ token, serviceProvider, vehicle, serviceType, dateMeeting, description }) => {

    return async dispatch => {
        const addServiceReq = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                serviceType,
                dateMeeting,
                description
            })
        }

        await fetch(`${process.env.REACT_APP_API_URL}/api/service?vehicle_id=${vehicle.id}&provider_id=${serviceProvider.id}`, addServiceReq)
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json()
                    .then(serviceToAdd => dispatch({
                        type: ADD_SERVICE,
                        payload: serviceToAdd
                    }))
            })
            .catch(err => console.log("ERROR ADDING SERVICES: ", err));
    }
}

export const updateService = ({ token, service }) => {

    return async dispatch => {
        const updateServiceReq = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        await fetch(`${process.env.REACT_APP_API_URL}/api/service?service_id=${service.id}`, updateServiceReq)
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json()
                    .then(serviceToUpdate => dispatch({
                        type: UPDATE_SERVICE,
                        payload: serviceToUpdate
                    }))
            })
            .catch(err => console.log("ERROR UPDATING SERVICES: ", err));
    }
}