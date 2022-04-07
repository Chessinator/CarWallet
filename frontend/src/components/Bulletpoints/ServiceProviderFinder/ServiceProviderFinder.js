import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchServiceProvider } from '../../../redux/action/serviceprovider/ServiceProvider'
import ServiceProviderFinderCard from '../ServiceProviderFinderCard'

import './ServiceProviderFinder.css'

const ServiceProviderFinder = () => {

    const dispatch = useDispatch();
    const { vehicleId } = useParams();
    const token = useSelector(state => state.user.token);
    const serviceProviders = useSelector(state => state.serviceProviders);
    const [serviceType, setServiceType] = useState("");
    const [serviceTypes, setServiceTypes] = useState([]);

    useEffect(() => {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.access}`
        }
        const request = {
            method: 'GET',
            headers,
            redirect: 'follow'
        };
        fetch(`http://localhost:8080/api/service/types`, request)
            .then(response => {
                if (response.status !== 200) {
                    return;
                }
                response.json()
                    .then(data => setServiceTypes(data));
            })
            .catch(err => console.log("ERROR GETTING SERVICE TYPES: ", err));
    }, [])

    useEffect(() => {
        dispatch(fetchServiceProvider({ token: token.access, serviceType }));
    }, [serviceType]);

    useEffect(() => { /* refresh hack */ }, [serviceProviders]);

    const onChange = (e) => {
        setServiceType(e.target.value);
    }

    return (
        <div className="service-provider-finder" >
            <h1>Servide Provider Finder</h1>
            <form className="service-provider-finder-form">
                <div className="service-provider-finder-form-input-container">
                    <label className="service-provider-finder-form-input-label" htmlFor="serviceTypes">Service Type:</label>
                    <select name="serviceTypes" id="serviceTypes" defaultValue={!serviceType && "default"} onChange={onChange}>
                        {!serviceType && <option disabled value="default">- select -</option>}
                        {serviceTypes.map((type, i) => <option key={i} value={type}>{type}</option>)}
                    </select>
                </div>
            </form>
            <ul className="service-provider-finder-list">
                {serviceProviders.allIds.map((id, i) => <li key={i} className="service-provider-finder-list-entry">
                    <ServiceProviderFinderCard key={i} serviceProvider={serviceProviders.byId[id]} serviceType={serviceType} />
                </li>)}
            </ul>
        </div>
    );
}

export default ServiceProviderFinder;