import "./ServiceHistory.css"
import ServiceHistoryEntry from "../ServiceHistoryEntry"
import Mock from "../../../context/Mock";
import { useParams } from 'react-router-dom';
import { useContext } from "react";
import Property from "../../Property"

const ServiceHistory = () => {

    const { vehicleId } = useParams();
    const mock = useContext(Mock);
    const serviceIds = mock.services.byVehicleId[vehicleId];

    let estimated = 0;
    let final = 0;

    return (
        <div className="bulletpoint-service-history">
            <h1 className="bulletpoint-h1">Services</h1>
            {serviceIds?.length > 0 &&
            serviceIds.map((serviceId) => mock.services.byId[serviceId])
                .map((service,i) => <ServiceHistoryEntry key={i} service={service} />)}
            {serviceIds?.length > 0 && 
                <div className="bulletpoint-service-history-total">
                    <Property name="Total price" value={`${serviceIds.reduce((sum, serviceId) => sum + (mock.services.byId[serviceId].priceFinal ?? 0), 0)} €`}/>
                </div>}
        </div>
    )
};

export default ServiceHistory;