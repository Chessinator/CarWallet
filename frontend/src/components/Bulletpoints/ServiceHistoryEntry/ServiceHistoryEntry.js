import { useSelector } from 'react-redux';
import Property from "../../Property"
import "./ServiceHistoryEntry.css"

const ServiceHistoryEntry = ({ service }) => {

    const serviceProviders = useSelector(state => state.serviceProviders);
    const serviceProvider = serviceProviders?.byId[service.serviceProviderId];
    return !serviceProvider ? <></> : (
        <div className="bulletpoint-service-history-entry">
            <Property name={"Name"} value={serviceProvider.name} />
            <Property name={"Status"} value={service.serviceStatus} />
            {service.dateMeeting && <Property name={"Meeting"} value={service.dateMeeting.toLocaleString()} />}
            {service.dateCompletion && <Property name={"Completion"} value={service.dateCompletion.toLocaleString()} />}
            <Property name={"Service Type"} value={service.serviceType} />
            <Property name={"Description"} value={service.description} />
            {service.priceEstimation > 0 && <Property name={"Estimated price"} value={`${service.priceEstimation} €`} />}
            {service.priceFinal > 0 && <Property name={"Final price"} value={`${service.priceFinal} €`} />}
        </div>
    )
}

export default ServiceHistoryEntry;