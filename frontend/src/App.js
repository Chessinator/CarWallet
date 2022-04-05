import React, { useContext } from 'react';
import './App.css';
import NavBar from './components/NavBar/';
import VehicleContainer from './components/VehicleContainer/';
import Register from './components/Register/'
import { Routes, Route } from "react-router-dom";
import Vehicles from './components/Vehicles'
import AddVehicleView from './components/AddVehicleView'
import UserSettings from './components/UserSettings';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute';
import Mock from "./context/Mock";

function App() {

  const mock = useContext(Mock);
  const user = mock.user;

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<WelcomePage />} />
        <Route element={<ProtectedRoute user={!user} />}>
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/vehicles" exact element={<Vehicles />}>
            <Route path="/vehicles/:vehicleId" element={<VehicleContainer />} />
            <Route path="/vehicles/addVehicle" element={<AddVehicleView />} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/userSettings" element={<UserSettings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
