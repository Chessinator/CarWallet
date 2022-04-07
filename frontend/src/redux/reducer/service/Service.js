import { FETCH_SERVICE, ADD_SERVICE, UPDATE_SERVICE } from '../../action/service/Service'

const initialState = {
    byId: {},
    byServiceProviderId: {},
    byVehicleId: {},
    allIds: []
}

const Service = (state = initialState, action) => {
    switch (action?.type) {
        case FETCH_SERVICE: {
            for (let _service of action.payload) {
                let { vehicle_id, service_provider_id, ...service } = _service;
                state = {
                    ...state,
                    byId: {
                        ...state.byId,
                        [service.id]: service,
                    },
                    byVehicleId: {
                        ...state.byVehicleId,
                        [vehicle_id]: [...(state.byVehicleId[vehicle_id] ?? []), service.id]
                    },
                    byServiceProviderId: {
                        ...state.byServiceProviderId,
                        [service_provider_id]: [...(state.byServiceProviderId[service_provider_id] ?? []), service.id]
                    },
                    allIds: [...state.allIds, service.id]
                }
            }
            return state;
        }

        case ADD_SERVICE: {
            let { vehicle_id, service_provider_id, ...service } = action.payload;
            state = {
                ...state,
                byId: {
                    ...state.byId,
                    [service.id]: service,
                },
                byVehicleId: {
                    ...state.byVehicleId,
                    [vehicle_id]: [...(state.byVehicleId[vehicle_id] ?? []), service.id]
                },
                byServiceProviderId: {
                    ...state.byServiceProviderId,
                    [service_provider_id]: [...(state.byServiceProviderId[service_provider_id] ?? []), service.id]
                },
                allIds: [...state.allIds, service.id]
            }
            return state;
        }

        case UPDATE_SERVICE: {
            const service = action.payload;
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [service.id]: service
                }
            }
        }

        default:
            return state;
    }
}

export default Service;