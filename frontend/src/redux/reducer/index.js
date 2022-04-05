import { combineReducers } from "redux";
import { DELETE_VEHICLE } from "../action/vehicle/Vehicle";
import User from "./user/User"
import Vehicle from "./vehicle/Vehicle";

export default combineReducers({ 
    User,
    Vehicle
});