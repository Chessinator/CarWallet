import React from "react";
import './VehicleDetail.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const VehicleDetail = (vehicle) => {

    const imgSource = [
        { name: "Pic 1 ", source: "http://via.placeholder.com/200x200" },
        { name: "Pic 2", source: "http://via.placeholder.com/200x200" },
        { name: "Pic 3", source: "http://via.placeholder.com/200x200" },
        { name: "Pic 4", source: "http://via.placeholder.com/200x200" }
    ]

    return (
        <div className="detail-frame">
            <div className="carousel-container">
            <Carousel >
                {imgSource.map((img, id) => (
                    <div key={id} className="vehicle-big-picture">
                        <img src={img.source} />    
                    </div>
                ))}
            </Carousel>
            </div>
            
            <div>
            <p>Make: VW</p>
            <p>Model: ID3</p>
            <p>Year: 2021</p>
            <p>VIN: VW123AB</p>
            <p>RegNr: 123456789</p>
            </div>
            


        </div>
    )
}

export default VehicleDetail;
