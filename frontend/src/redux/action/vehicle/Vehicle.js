export const ADD_VEHICLE = "ADD_VEHICLE";
export const DELETE_VEHICLE = "DELETE_VEHICLE";
export const PATCH_VEHICLE = "PATCH_VEHICLE";
export const ADD_VEHICLES = "ADD_VEHICLES";

export const addVehicle = ({vehicle, token}) => {

    return async dispatch => {
        const addMethod = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(vehicle)   
        }

        await fetch("http://localhost:8080/api/vehicle/", addMethod)
            .then(response => {console.log("ADD_RESPONSE: ", response); return response})
            .then(response => response.json())
          
            .then(vehicleToAdd => dispatch({
                type: ADD_VEHICLE,
                payload: vehicleToAdd
            }));
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

        await fetch("http://localhost:8080/api/vehicle/", getVehicles)
            .then(response => {console.log("fetchVehicles: ", response); return response})
            .then(response => response.json())
            .then(json => {console.log("json: ", json); return json})
            .then(vehiclesToAdd => dispatch({
                type: ADD_VEHICLES,
                payload: vehiclesToAdd
            }));
    }
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