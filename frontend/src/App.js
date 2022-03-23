import React from 'react';
import './App.css';
import NavBar from './components/NavBar/';
import VehicleDetail from './components/VehicleDetail/';
import VehicleSelection from './components/VehicleSelection/';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <VehicleSelection />
        <VehicleDetail />
      </div>

    </div>
  );
}

export default App;
