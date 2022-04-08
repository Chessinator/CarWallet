import ServiceHistoryEntry from "../ServiceHistoryEntry"
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Property from "../../Property"

import "./ServiceHistory.css"

const ServiceHistory = () => {

    const { vehicleId } = useParams();
    const services = useSelector(state => state.services);

    let estimated = 0;
    let final = 0;

    return (
        <div className="bulletpoint-service-history">
            <h1 className="bulletpoint-h1">Services</h1>
            {services.byVehicleId[vehicleId] &&
                services.byVehicleId[vehicleId]
                    .map((serviceId, i) => {
                        let service = services.byId[serviceId];
                        if (service === undefined) {
                            return;
                        }
                        final += service.priceFinal ?? 0;
                        return <ServiceHistoryEntry key={i} service={service} />
                    })
            }
            {services.byVehicleId[vehicleId] &&
                <div className="bulletpoint-service-history-total">
                    <Property name="Total price" value={`${Math.round(final * 100) / 100} €`} />
                </div>}
        </div>
    )
};

export default ServiceHistory;