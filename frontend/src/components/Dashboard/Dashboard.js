import React from 'react'
import VehicleSelection from '../VehicleSelection/';
import VehicleDetail from '../VehicleDetail/';
import './Dashboard.css'

const DashBoard = () => {

    return (
        <div className="main-content">
            <VehicleSelection />
            <VehicleDetail />
        </div>

    )
}

export default DashBoard;