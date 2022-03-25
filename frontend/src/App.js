import React from 'react';
import './App.css';
import NavBar from './components/NavBar/';
import VehicleContainer from './components/VehicleContainer/';
import VehicleSelection from './components/VehicleSelection/';
import Register from './components/Register/'
import { NavLink } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Vehicles from './components/Vehicles'

function App() {
  return (

    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/" exact element={<Vehicles />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/vehicles" exact element={<Vehicles />}>
            <Route path="/vehicles/:vehicleId"  element={<VehicleContainer />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
