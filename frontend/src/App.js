import React from 'react';
import './App.css';
import NavBar from './components/NavBar/';
import VehicleDetail from './components/VehicleDetail/';
import VehicleSelection from './components/VehicleSelection/';
import Register from './components/Register/'
import { NavLink } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/'

function App() {
  return (

    <div className="App">
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
        
        

      </div>

    </div>

  );
}

export default App;
