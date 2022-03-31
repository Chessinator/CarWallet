import { useState, useEffect } from "react"
import "./AddVehicleView.css"

const AddVehicleView = () => {

    const [vehicle, setVehicle] = useState({
        make: "",
        model: "",
        vin: "",
        registerNumber: ""
    });

    const onChange = ({ target: { value, id } }) => {
        setVehicle({
            ...vehicle,
            [id]: value
        });
    };

    const onClick = () => {
        console.log("vehicle:", vehicle); // ADD REDUX ACTION
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
                    htmlFor="registerNumber">
                    RegNum:
                </label>
                <input
                    className="col-md-9 property-value"
                    type="text"
                    id="registerNumber"
                    value={vehicle.registerNumber}
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