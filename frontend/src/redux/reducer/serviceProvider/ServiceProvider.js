import { FETCH_SERVICEPROVIDER } from '../../action/serviceProvider/ServiceProvider';

const initialState = {
    byId: {},
    allIds: []
};

const ServiceProvider = (state = initialState, action) => {
    switch (action?.type) {
        case FETCH_SERVICEPROVIDER: {
            for (let serviceProvider of action.payload) {
                state = addServiceProviderToState({ state, serviceProvider })
                console.log("sp state:", state)
            }
            return state;
        }
        default:
            return state;
    }
}

export default ServiceProvider;

const addServiceProviderToState = ({ state, serviceProvider }) => ({
    ...state,
    byId: {
        ...state.byId,
        [serviceProvider.id]: serviceProvider,
    },
    allIds: state.allIds.includes(serviceProvider.id) ? state.allIds : [...state.allIds, serviceProvider.id]
})