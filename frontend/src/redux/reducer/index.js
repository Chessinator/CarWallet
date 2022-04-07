import { combineReducers } from "redux";
import User from "./user"
import Vehicle from "./vehicle";
import Service from "./service";
import ServiceProvider from "./serviceProvider";
import { LOGOUT_USER } from '../action/user/User.js'

const appReducer = combineReducers({
    user: User,
    vehicles: Vehicle,
    services: Service,
    serviceProvider: ServiceProvider
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER) {
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}

export default rootReducer;