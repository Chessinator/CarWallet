import VehicleDetail from '../Bulletpoints/VehicleDetail/';
import ServiceHistory from '../Bulletpoints/ServiceHistory/';
import ServiceProviderFinder from '../Bulletpoints/ServiceProviderFinder/'
import "./vehicleContainer.css"

export default ({ vehicle }) => {

    return (
        <div className="vehicle-container col-md-8">
            <VehicleDetail />
            <ServiceHistory />
            <ServiceProviderFinder />
        </div>
    )
}