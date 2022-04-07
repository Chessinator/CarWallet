import React from "react";
import './VehicleSelection.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import ListItem from "../VehicleListItem/ListItem";
import AddVehicleItem from "../AddVehicleItem";
import { useSelector } from "react-redux";

const VehicleSelection = () => {

    const vehicles = useSelector(state => state.vehicles); //ACCESSING THE REDUX STORE

    return (
        <div className='selection-frame col-md-4' >
                <ul className="list-group list-group-flush">
                    {vehicles?.allIds.map( (vehicleId, i) => <ListItem key={i} vehicle={vehicles.byId[vehicleId]} />)}
                    <AddVehicleItem />
                </ul>    
        </div>
    )
}

export default VehicleSelection;