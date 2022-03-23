import React from "react";
import './VehicleSelection.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import VehicleList from "../VehicleList/VehicleList";
import ListItem from "../VehicleListItem/ListItem";



const VehicleSelection = () => {

    

    return (
        <div className='selection-frame'>
            <div className="card" >
                <ul className="list-group list-group-flush">
                    {VehicleList.map( (vehicle, i) => <ListItem key={i} vehicle={vehicle} />)}
                </ul>
            </div>
        </div>
    )
}

export default VehicleSelection;