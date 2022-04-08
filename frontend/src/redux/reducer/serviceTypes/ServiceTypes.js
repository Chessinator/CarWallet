import { FETCH_SERVICETYPES } from '../../action/serviceTypes/ServiceTypes'

const initialState = [];

const ServiceTypes = (state = initialState, action) => {
    switch (action?.type) {
        case FETCH_SERVICETYPES:
            return Array.isArray(action.payload) ? action.payload : initialState;

        default:
            return state;
    }
}

export default ServiceTypes;