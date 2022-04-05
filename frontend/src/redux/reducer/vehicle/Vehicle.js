import { ADD_VEHICLE, DELETE_VEHICLE, PATCH_VEHICLE } from "../../action/vehicle/Vehicle";



export default (state = [], action) => {
    switch (action.type) {
        case "ADD_VEHICLE":
            return state.concat(action.payload);
        case "DELETE_VEHICLE":
            return {...state, 
                    vehicles: state.filter(vehicle => vehicle !== action.payload
                    )}
        case "PATCH_VEHICLE":
            return state.map(vehicle => vehicle.id !== action.payload.id ? vehicle : action.payload);
        default: return state;

    }
}