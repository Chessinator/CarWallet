import {
    ADD_VEHICLE,
    DELETE_VEHICLE,
    PATCH_VEHICLE,
    ADD_VEHICLES
} from "../../action/vehicle/Vehicle";

const initialState = { byId: {}, allIds: [] }

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_VEHICLES: {
            let newState = {
                allIds: [],
                byId: {}
            }
            for (let vehicle in action.payload) {
                newState = {
                    ...state,
                    allIds: state.allIds.includes(vehicle.id)
                        ? state.allIds
                        : [...state.allIds, vehicle.id],
                    byId: {
                        ...state.byId,
                        [vehicle.id]: vehicle
                    }
                };
            }
            return newState;
        }
        case ADD_VEHICLE: {
            console.log("ADD_VEHICLE payload:", action.payload);
            const vehicle = action.payload;
            const newState = {
                ...state,
                allIds: state.allIds.includes(vehicle.id)
                    ? state.allIds
                    : [...state.allIds, vehicle.id],
                byId: {
                    ...state.byId,
                    [vehicle.id]: vehicle
                }
            };
            console.log("ADD_VEHICLE newState: ", newState);
            return newState;
        }
        case DELETE_VEHICLE: {
            return {
                ...state,
                vehicles: state.filter(vehicle => vehicle !== action.payload
                )
            }
        }
        case PATCH_VEHICLE:
            return state.map(vehicle => vehicle.id !== action.payload.id ? vehicle : action.payload);
        default:
            return state;

    }
}