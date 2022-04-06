import { combineReducers } from "redux";
import User from "./user/User"
import Vehicle from "./vehicle/Vehicle";
import { LOGOUT_USER } from '../action/user/User.js'

const appReducer = combineReducers({
    user: User,
    vehicles: Vehicle
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER) {
        return appReducer(undefined, action)
    }

    return appReducer(state, action)
}

export default rootReducer;