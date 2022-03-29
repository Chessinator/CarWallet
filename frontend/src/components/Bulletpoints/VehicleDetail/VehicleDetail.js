import React, { useContext, useState } from "react";
import './VehicleDetail.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { vehiclesList } from '../../../mock/vehicles';
import { useParams } from 'react-router-dom';
import Mock from "../../../context/Mock";
import Property from "../../Property"
import '../../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'


const VehicleDetail = () => {
    const { vehicleId } = useParams();
    const mock = useContext(Mock);
    const vehicle = mock.vehicles.byId[vehicleId];
    const imgSource = vehicle?.pictures ?? [];

    const [lock, setLock] = useState(true);

    const onChange =() => {

    }

    return (
        <div className="bulletpoint-detail-frame">
            <h1>Overview</h1>
            <div className="detail-frame" >

                <div className="detail-frame-carousel col-md-4">
                    <Carousel >
                        {imgSource?.length > 0 && imgSource.map((img, i) => (
                            <div key={i} className="vehicle-big-picture">
                                <img src={img} />
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="detail-frame-properties col-md-6">
                    <Property name="Make" value={vehicle?.make} disabled={lock} />
                    <Property name="Model" value={vehicle?.model} disabled={lock} />
                    <Property name="Year" value={vehicle?.year} disabled={lock} />
                    <Property name="VIN" value={vehicle?.vin} disabled={lock} />
                    <Property name="RegNr" value={vehicle?.registerNumber} disabled={lock} />
                    <Property name="Description" value={vehicle?.description} disabled={lock} />
                </div>

                <div className="detail-frame-edit">
                    <button type="button" className="btn btn-light detail-frame-edit-button" onClick={() => setLock(!lock)}> {lock ? <i className="bi bi-lock"></i> : <i className="bi bi-unlock"></i>}Edit data</button>
                    <button type="button" className="btn btn-light detail-frame-picture-button">Edit pictures</button>
                </div>

            </div>
        </div>

    )
}

export default VehicleDetail;
