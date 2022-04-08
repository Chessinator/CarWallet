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
            for (let { vehicle_id, service_provider_id, ...tmpService } of action.payload) {
                const service = {
                    ...tmpService,
                    vehicleId: vehicle_id,
                    serviceProviderId: service_provider_id
                }
                state = addServiceToState({ state, service });
            }
            return state;
        }

        case ADD_SERVICE: {
            let { vehicle_id, service_provider_id, ...tmpService } = action.payload;
            const service = {
                ...tmpService,
                vehicleId: vehicle_id,
                serviceProviderId: service_provider_id
            }
            return addServiceToState({ state, service })
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


const addServiceToState = ({ state, service }) => ({
    ...state,
    byId: {
        ...state.byId,
        [service.id]: service,
    },
    byVehicleId: {
        ...state.byVehicleId,
        [service.vehicleId]: state.byVehicleId[service.vehicleId]?.includes(service.id)
            ? state.byVehicleId[service.vehicleId]
            : [...(state.byVehicleId[service.vehicleId] ?? []), service.id]
    },
    byServiceProviderId: {
        ...state.byServiceProviderId,
        [service.serviceProviderId]: state.byServiceProviderId[service.serviceProviderId]?.includes(service.serviceProviderId)
            ? state.byServiceProviderId[service.serviceProviderId]
            : [...(state.byServiceProviderId[service.serviceProviderId] ?? []), service.id]
    },
    allIds: state.allIds.includes(service.id)
        ? state.allIds
        : [...state.allIds, service.id]
})