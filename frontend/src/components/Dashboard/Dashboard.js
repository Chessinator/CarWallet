import ImportantNews from '../ImportantNews'
import VehicleNews from '../VehicleNews'
import AppNews from '../AppNews'
import ServiceProviderNews from '../ServiceProviderNews'
import "./Dashboard.css"

const Dashboard = () =>
    <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="dashboard-news">
            <ImportantNews />
            <VehicleNews />
            <AppNews />
            <ServiceProviderNews />
        </div>
    </div>

export default Dashboard