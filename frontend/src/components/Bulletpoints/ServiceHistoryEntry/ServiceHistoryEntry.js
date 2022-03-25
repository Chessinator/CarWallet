import "./ServiceHistoryEntry.css"
import Property from "../../Property"
import Mock from "../../../context/Mock";
import { useContext } from "react";

const ServiceHistoryEntry = ({serviceId}) => {

    const mock = useContext(Mock);
    const service = mock.services.byId[serviceId];
    const serviceProvider = mock.serviceProviders.byId[service.serviceProviderId];

    return (
        <div className="bulletpoint-service-history-entry">
            <Property name={"Service Provider"} value={serviceProvider.name} />
            <Property name={"Status"} value={service.status} />
            <Property name={"Meeting"} value={service.dateMeeting?.toString()} />
            <Property name={"Completion"} value={service.dateCompletion?.toString()} />
            <Property name={"Servicetype"} value={service.serviceType} />
            <Property name={"Description"} value={service.description} />
            <Property name={"Estimated price"} value={service.priceEstimation} />
            <Property name={"Final price"} value={service.priceFinal} />
        </div>
    )
}

export default ServiceHistoryEntry;