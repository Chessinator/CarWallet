import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import Mock from "../../context/Mock";

const NavBar = () => {

    const mock = useContext(Mock);
    const user = mock.user;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">CarWallet</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            user && <>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/dashboard">Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/vehicles">Vehicles</NavLink>
                                </li>
                            </>
                        }
                    </ul>

                    <span className="navbar-text">
                        {user &&
                            <NavLink className="user-profile" to="/userSettings">{`${mock.user.firstname} ${mock.user.lastname}`}
                                <img className="user-profile-picture" src={mock.user.picture} /></NavLink>
                        }
                        {!user &&
                            <>
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                                <NavLink className="nav-link" to="/register">Sign Up</NavLink>
                            </>
                        }
                    </span>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;