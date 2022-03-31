import VehicleDetail from '../Bulletpoints/VehicleDetail/';
import ServiceHistory from '../Bulletpoints/ServiceHistory/';
import "./vehicleContainer.css"

export default ({ vehicle }) => {

    return (
        <div className="vehicle-container col-md-8">
            <VehicleDetail />
            <ServiceHistory />
        </div>
    )
}