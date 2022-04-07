import {
    ADD_VEHICLE,
    DELETE_VEHICLE,
    PATCH_VEHICLE,
    ADD_VEHICLES
} from "../../action/vehicle/Vehicle";

const initialState = {
    byId: {},
    allIds: []
};

const Vehicle = (state = initialState, action) => {
    switch (action?.type) {
        case ADD_VEHICLES: {
            for (let vehicle of action.payload) {
                state = {
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
            return state;
        }
        case ADD_VEHICLE: {
            const vehicle = action.payload;
            state = {
                ...state,
                allIds: state.allIds.includes(vehicle.id)
                    ? state.allIds
                    : [...state.allIds, vehicle.id],
                byId: {
                    ...state.byId,
                    [vehicle.id]: vehicle
                }
            };
            return state;
        }
        case DELETE_VEHICLE: {
            const vehicle = action.payload;
            delete state.byId[vehicle.id];
            return {
                ...state,
                allIds: [...state.allIds.filter(id => id !== vehicle.id)]
            };
        }
        case PATCH_VEHICLE:
            const vehicle = action.payload;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [vehicle.id]: vehicle
                }};
        default:
            return state;

    }
};

export default Vehicle;