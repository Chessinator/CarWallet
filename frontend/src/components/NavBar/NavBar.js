import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import Mock from "../../context/Mock";

const NavBar = () => {

    const mock = useContext(Mock);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">CarWallet</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/dashboard">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/vehicles">Vehicles</NavLink>
                        </li>
                    </ul>

                    <span className="navbar-text">
                        <NavLink className="user-profile" to="/userSettings">{`${mock.user.firstname} ${mock.user.lastname}`}
                            <img className="user-profile-picture" src={mock.user.picture} /></NavLink>
                    </span>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;