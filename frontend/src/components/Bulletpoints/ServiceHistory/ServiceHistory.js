import ServiceHistoryEntry from "../ServiceHistoryEntry"
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Property from "../../Property"
import { useEffect, useState } from "react";

import "./ServiceHistory.css"

const ServiceHistory = () => {

    const { vehicleId } = useParams();
    const vehicles = useSelector(state => state.vehicles);
    const services = useSelector(state => state.services);

    let estimated = 0;
    let final = 0;

    return (
        <div className="bulletpoint-service-history">
            <h1 className="bulletpoint-h1">Services</h1>
            {services.byVehicleId[vehicleId] &&
                services.byVehicleId[vehicleId]
                .map((service,i) => <ServiceHistoryEntry key={i} service={service} />)}
            {services.byVehicleId[vehicleId] && 
                <div className="bulletpoint-service-history-total">
                    <Property name="Total price" value={`-sum- €`}/>
                </div>}
        </div>
    )
};

export default ServiceHistory;