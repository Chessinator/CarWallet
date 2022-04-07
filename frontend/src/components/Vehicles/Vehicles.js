import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import VehicleSelection from '../VehicleSelection';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVehicles } from '../../redux/action/vehicle/Vehicle';
import './Vehicles.css'

const Vehicles = () => {

    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    
    useEffect(() => {
        dispatch(fetchVehicles({ token: userState.token.access }));
    }, []);

    return (
        <div className="main-content col-md-12">
            <VehicleSelection />
            <Outlet />
        </div>
    )
}

export default Vehicles;