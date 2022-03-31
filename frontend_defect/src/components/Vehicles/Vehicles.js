import React, { useState, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import VehicleSelection from '../VehicleSelection';
import './Vehicles.css'

const Vehicles = () =>
    <div className="main-content col-md-12">
        <VehicleSelection />
        <Outlet />
    </div>

export default Vehicles;