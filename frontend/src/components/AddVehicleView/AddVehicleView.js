import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addVehicle, DEFAULT_VEHICLE } from "../../redux/action/vehicle/Vehicle";

import "./AddVehicleView.css"

const AddVehicleView = () => {

    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token?.access);

    const [vehicle, setVehicle] = useState(DEFAULT_VEHICLE);

    const onChange = ({ target: { value, id } }) => {
        setVehicle({
            ...vehicle,
            [id]: value
        });
    };

    const onClick = () => {
        dispatch(addVehicle({ vehicle, token }));
        setVehicle(DEFAULT_VEHICLE);
    }

    return <div className="add-vehicle-view">
        <h2 className="add-vehicle-view-header">Add a new vehicle</h2>
        <div className="add-vehicle-view-form">
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="make">
                    Make:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="make"
                    value={vehicle.make}
                    placeholder="Please add a make"
                    onChange={onChange}/>
            </div>
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="model">
                    Model:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="model"
                    value={vehicle.model}
                    placeholder="Please add a model"
                    onChange={onChange}/>
            </div>
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="vin">
                    VIN:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="vin"
                    value={vehicle.vin}
                    placeholder="Please add a vehicle number"
                    onChange={onChange}/>
            </div>
            <div className="row">
                <label
                    className="col-md-3 property-name"
                    htmlFor="registrationNumber">
                    RegNum:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="registrationNumber"
                    value={vehicle.registrationNumber}
                    placeholder="Please add a registration number"
                    onChange={onChange}/>
            </div>
            <button className="add-vehicle-view-button btn btn-light" type="submit" onClick={onClick}>
                Add Vehicle
            </button>
        </div>
    </div>
}
export default AddVehicleView;