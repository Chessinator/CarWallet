import "./ServiceHistory.css"
import ServiceHistoryEntry from "../ServiceHistoryEntry"
import Mock from "../../../context/Mock";
import { useParams } from 'react-router-dom';
import { useContext } from "react";

const ServiceHistory = () => {

    const { vehicleId } = useParams();
    const mock = useContext(Mock);
    const services = mock.services.byVehicleId[vehicleId];

    return (
        <div className="bulletpoint-service-history">
            <h1>Services</h1>
            {services?.length > 0 && services.map(serviceId => <ServiceHistoryEntry serviceId={serviceId} />)}
        </div>
    )
};

export default ServiceHistory;