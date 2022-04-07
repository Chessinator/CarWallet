import { resolvePath } from "react-router-dom";

export const ADD_VEHICLE = "ADD_VEHICLE";
export const DELETE_VEHICLE = "DELETE_VEHICLE";
export const PATCH_VEHICLE = "PATCH_VEHICLE";
export const ADD_VEHICLES = "ADD_VEHICLES";


export const DEFAULT_VEHICLE = {
    description: "",
    make: "",
    model: "",
    registrationNumber: "",
    vin: "",
    year: ""
};

export const addVehicle = ({ vehicle, token }) => {

    return async dispatch => {
        const addMethod = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(vehicle)
        }

        await fetch(`${process.env.REACT_APP_API_URL}/api/vehicle/`, addMethod)
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json()
                    .then(vehicleToAdd => dispatch({
                        type: ADD_VEHICLE,
                        payload: vehicleToAdd
                    }));
            })
            .catch(err => { console.log("ERROR ADDING VEHICLES: ", err) });
    }
}

export const fetchVehicles = ({ token }) => {

    return async dispatch => {
        const getVehicles = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        await fetch(`${process.env.REACT_APP_API_URL}/api/vehicle/`, getVehicles)
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json()
                    .then(vehiclesToAdd => dispatch({
                        type: ADD_VEHICLES,
                        payload: vehiclesToAdd
                    }))
            })
            .catch(err => console.log("ERROR FETCHING VEHICLES: ", err));
    }
}

export const deleteVehicle = ({ token, vehicle }) => {
    const vehicleToDelete = vehicle;

    return async dispatch => {
        const delVehicle = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(vehicleToDelete)
        }

        await fetch(`${process.env.REACT_APP_API_URL}/api/vehicle?vehicle_id=${vehicle.id}`, delVehicle)
            .then(response => {
                if (response.status !== 202) {
                    return;
                }
                return dispatch({
                    type: DELETE_VEHICLE,
                    payload: vehicleToDelete
                })
            })
            .catch(err => console.error("ERROR DELETING VEHICLE: ", err));
    }
}

export const updateVehicle = ({ token, vehicle }) => {

    return async dispatch => {
        const patchVehicle = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(vehicle)
        }

        await fetch(`${process.env.REACT_APP_API_URL}/api/vehicle?vehicle_id=${vehicle.id}`, patchVehicle)
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json()
                    .then(data => dispatch({
                        type: PATCH_VEHICLE,
                        payload: data
                    }))
            })
            .catch(err => console.error("ERROR PATCHING VEHICLE: ", err));
    }
}