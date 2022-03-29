import "./ServiceHistoryEntry.css"
import Property from "../../Property"
import Mock from "../../../context/Mock";
import { useContext } from "react";

const ServiceHistoryEntry = ({ service }) => {

    const mock = useContext(Mock);
    const serviceProvider = mock.serviceProviders.byId[service.serviceProviderId];

    return (
        <div className="bulletpoint-service-history-entry">
            <Property name={"Service Provider"} value={serviceProvider.name} />
            <Property name={"Status"} value={service.status} />
            <Property name={"Meeting"} value={service.dateMeeting?.toLocaleString()} />
            <Property name={"Completion"} value={service.dateCompletion?.toLocaleString()} />
            <Property name={"Servicetype"} value={service.serviceType} />
            <Property name={"Description"} value={service.description} />
            {service.priceEstimation && <Property name={"Estimated price"} value={`${service.priceEstimation} €`} />}
            {service.priceFinal && <Property name={"Final price"} value={`${service.priceFinal} €`} />}
        </div>
    )
}

export default ServiceHistoryEntry;