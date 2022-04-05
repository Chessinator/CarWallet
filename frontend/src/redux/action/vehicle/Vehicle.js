import {asyncDispatch} from "../../api";
export const ADD_VEHICLE = "ADD_VEHICLE";
export const DELETE_VEHICLE = "DELETE_VEHICLE";
export const PATCH_VEHICLE = "PATCH_VEHICLE";

export const addVehicle = (vehicle) => {

    asyncDispatch({content: vehicle, method:"POST", url:"http://localhost:8080/api/vehicle/", type: ADD_VEHICLE })
}

export const deleteVehicle = (vehicle) => {

    return async dispatch => {
        const delVehicle = {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json" 
            },
            body: vehicle
        }

        await fetch(`http://localhost:8080/api/vehicle/${vehicle.id}`, delVehicle)
            .then(response => response.json)
            .then(data => dispatch({
                type: DELETE_VEHICLE,
                payload:data
            }))

    }
}

export const updateVehicle = (vehicle) => {

    return async dispatch => {
        const patchVehicle = {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json" 
            },
            body: vehicle
        }

        await fetch(`http://localhost:8080/api/vehicle/${vehicle.id}`, patchVehicle)
            .then(response => response.json)
            .then(data => dispatch({
                type: PATCH_VEHICLE,
                payload:data
            }))

    }
}

