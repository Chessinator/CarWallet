import "./ServiceHistoryEntry.css"
import Property from "../../Property"

const ServiceHistoryEntry = ({ service }) => {

    const serviceProvider = {};

    return (
        <div className="bulletpoint-service-history-entry">
            <Property name={"Service Provider"} value={serviceProvider.name} />
            <Property name={"Status"} value={service.status} />
            {service.dateMeeting && <Property name={"Meeting"} value={service.dateMeeting.toLocaleString()} />}
            {service.dateCompletion && <Property name={"Completion"} value={service.dateCompletion.toLocaleString()} />}
            <Property name={"Servicetype"} value={service.serviceType} />
            <Property name={"Description"} value={service.description} />
            {service.priceEstimation && <Property name={"Estimated price"} value={`${service.priceEstimation} €`} />}
            {service.priceFinal && <Property name={"Final price"} value={`${service.priceFinal} €`} />}
        </div>
    )
}

export default ServiceHistoryEntry;