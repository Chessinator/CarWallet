import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addService } from '../../../redux/action/service/Service'
import { haversineDistance } from '../../../helper/Math'

import './ServiceProviderFinderCard.css'

const ServiceProviderFinderCard = ({ serviceProvider, serviceType }) => {

    const dispatch = useDispatch();

    const { name, address, description, vatNumber, owner } = serviceProvider;
    const [expanded, setExpanded] = useState(false);
    const [meetDate, setMeetDate] = useState(new Date().toISOString().slice(0, 10));
    const [bookDescription, setBookDescription] = useState("");

    const { vehicleId } = useParams();
    const token = useSelector(state => state.user.token?.access);
    const userAddress = useSelector(state => state.user.details.address);
    const [userGeoPos, setUserGeoPos] = useState(undefined);
    const [providerGeoPos, setProviderGeoPos] = useState(undefined);
    const [distance, setDistance] = useState(undefined);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/search?q="${address}"&format=json`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            redirect: "follow"
        })
            .then(response => response.json())
            .then(geoPos => setProviderGeoPos(geoPos));


        fetch(`https://nominatim.openstreetmap.org/search?q="${userAddress}"&format=json`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            redirect: "follow"
        })
            .then(response => response.json())
            .then(geoPos => setUserGeoPos(geoPos))
    }, [])

    useEffect(() => {
        if (userGeoPos === undefined
            || providerGeoPos === undefined
        ) {
            return;
        }
        const dist = haversineDistance(userGeoPos[0], providerGeoPos[0]);
        setDistance(dist);

    }, [providerGeoPos, userGeoPos])

    const requestService = () => {
        dispatch(addService({
            token,
            vehicle: { id: vehicleId },
            serviceProvider,
            serviceType,
            dateMeeting: meetDate,
            description: bookDescription
        }));
        toggleExpanded()
    }

    return (
        <div className="service-provider-finder-list-card">
            <div onClick={toggleExpanded}>
                <div className="service-provider-finder-list-card-line1">
                    <div className="service-provider-finder-list-name service-provider-finder-list-card-left">{name}</div>
                    <div className="service-provider-finder-list-address service-provider-finder-list-card-right">{address}{distance && distance !== NaN &&` (${Math.round(distance * 10) / 10} km away)`}</div>
                </div>
                <div className="service-provider-finder-list-card-line2">
                    <div className="service-provider-finder-list-description">{description}</div>
                </div>
                <div className="service-provider-finder-list-card-line1">
                    <div className="service-provider-finder-list-vatNumber service-provider-finder-list-card-left">{vatNumber}</div>
                    <div className="service-provider-finder-list-owner service-provider-finder-list-card-right">{owner}</div>
                </div>
            </div>
            {expanded && <div className="service-provider-finder-list-card-booking">
                <div className="service-provider-finder-list-card-booking-top">
                    <input type="date" name="meetDate" value={meetDate} onChange={(e) => setMeetDate(e.target.value)} />
                    <button onClick={requestService}>Book</button>
                </div>
                <div className="service-provider-finder-list-card-booking-bottom">
                    <input type="text" name="description" value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} />
                </div>
            </div>}
        </div>
    )
}

export default ServiceProviderFinderCard;