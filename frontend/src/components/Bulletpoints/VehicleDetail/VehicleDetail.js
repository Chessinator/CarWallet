import React, { useEffect, useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import Property from "../../Property"
import { useSelector, useDispatch } from "react-redux";
import { updateVehicle, DEFAULT_VEHICLE } from "../../../redux/action/vehicle/Vehicle"

import '../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './VehicleDetail.css'

const VehicleDetail = () => {
    const dispatch = useDispatch();

    const { vehicleId } = useParams();
    const vehicles = useSelector(state => state.vehicles);
    const [vehicle, setVehicle] = useState({...DEFAULT_VEHICLE, ...vehicles.byId[vehicleId]});
    const imgSource = vehicle.pictures ?? [];

    const token = useSelector(state => state.user.token);

    const [lock, setLock] = useState(true);

    useEffect(() => {
        setVehicle({...DEFAULT_VEHICLE, ...vehicles.byId[vehicleId]});
    }, [vehicleId])

    const onChange = (e) => setVehicle({...vehicle, [e.target.id]: e.target.value})
    const saveVehicle = ()  => dispatch(updateVehicle({token: token.access, vehicle}))
    const propertyRatio = {name: 4, value: 7};

    return (
        <div className="bulletpoint-detail-frame">
            <h1>Overview</h1>
            <div className="detail-frame" >

                <div className="detail-frame-carousel col-md-4">
                    <Carousel >
                        {imgSource?.length > 0 && imgSource.map((img, i) => (
                            <div key={i} className="vehicle-big-picture">
                                <img src={img} alt={i}/>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="detail-frame-properties col-md-6">
                    <Property name="Make" id="make" value={vehicle.make} disabled={lock} onChange={onChange} ratio={propertyRatio} />
                    <Property name="Model" id="model" value={vehicle.model} disabled={lock} onChange={onChange} ratio={propertyRatio} />
                    <Property name="Year" id="year" value={vehicle.year} disabled={lock} onChange={onChange} ratio={propertyRatio} />
                    <Property name="VIN" id="vin" value={vehicle.vin} disabled={lock} onChange={onChange} ratio={propertyRatio} />
                    <Property name="RegNr" id="registrationNumber" value={vehicle.registrationNumber} disabled={lock} onChange={onChange} ratio={propertyRatio} />
                    <Property name="Description" id="description" value={vehicle.description} disabled={lock} onChange={onChange} ratio={propertyRatio} />
                </div>

                <div className="detail-frame-edit">
                    <button type="button" className="btn btn-light detail-frame-edit-button" onClick={() => setLock(!lock)}> {lock ? <i className="bi bi-lock"></i> : <i className="bi bi-unlock"></i>}Edit data</button>
                    <button type="button" className="btn btn-light detail-frame-picture-button">Edit pictures</button>
                    {!lock && <button type="button" onClick={saveVehicle} className="btn btn-light detail-frame-picture-button">Save</button>}
                    {!lock && <button type="button" className="btn btn-light detail-frame-picture-button">Delete vehicle</button>}
                </div>

            </div>
        </div>

    )
}

export default VehicleDetail;
