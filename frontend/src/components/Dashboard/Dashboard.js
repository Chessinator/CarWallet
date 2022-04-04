import UrgentNews from '../UrgentNews'
import VehicleNews from '../VehicleNews'
import CustomerAppNews from '../CustomerAppNews'
import ServiceProviderNews from '../ServiceProviderNews'
import "./Dashboard.css"

const Dashboard = () =>
    <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dashboard-news">
            <UrgentNews />
            <VehicleNews />
            <CustomerAppNews />
            <ServiceProviderNews />
        </div>
    </div>

export default Dashboard