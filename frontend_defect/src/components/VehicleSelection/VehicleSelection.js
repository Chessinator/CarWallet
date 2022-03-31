import React, { useState, useContext } from "react";
import './VehicleSelection.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import ListItem from "../VehicleListItem/ListItem";
import Mock from "../../context/Mock";
import AddVehicleItem from "../AddVehicleItem";

const VehicleSelection = () => {

    const mock = useContext(Mock);
    const vehicleIds = mock.vehicles.allIds;

    return (
        <div className='selection-frame col-md-4' >
                <ul className="list-group list-group-flush">
                    {vehicleIds.map( (vehicleId, i) => <ListItem key={i} vehicle={mock.vehicles.byId[vehicleId]} />)}
                    <AddVehicleItem />
                </ul>    
        </div>
    )
}

export default VehicleSelection;