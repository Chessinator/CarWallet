import { FETCH_SERVICEPROVIDER } from '../../action/serviceprovider/ServiceProvider';

const initialState = {
    byId: {},
    allIds: []
};

const ServiceProvider = (state = initialState, action) => {
    switch (action?.type) {
        case FETCH_SERVICEPROVIDER: {
            state = initialState;
            for (let provider of action.payload) {
                state = {
                    ...state,
                    allIds: state.allIds.includes(provider.id)
                        ? state.allIds
                        : [...state.allIds, provider.id],
                    byId: {
                        ...state.byId,
                        [provider.id]: provider
                    }
                };
            }
            return state;
        }
        default:
            return state;
    }
}

export default ServiceProvider;