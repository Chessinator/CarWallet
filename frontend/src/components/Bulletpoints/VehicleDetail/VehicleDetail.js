import React, { useContext } from "react";
import './VehicleDetail.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { vehiclesList } from '../../../mock/vehicles';
import { useParams } from 'react-router-dom';
import Mock from "../../../context/Mock";
import Property from "../../Property"


const VehicleDetail = () => {

    const { vehicleId } = useParams();
    const mock = useContext(Mock);
    const vehicle = mock.vehicles.byId[vehicleId];
    const imgSource = vehicle?.pictures ?? [];

    return (

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

            <div className="detail-frame-properties col-md-8">
                <Property name="Make" value={vehicle?.make} />
                <Property name="Model" value={vehicle?.model} />
                <Property name="Year" value={vehicle?.year} />
                <Property name="VIN" value={vehicle?.vin} />
                <Property name="RegNr" value={vehicle?.registerNumber} />
            </div>



        </div>
    )
}

export default VehicleDetail;
