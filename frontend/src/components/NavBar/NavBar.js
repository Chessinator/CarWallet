import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import Mock from "../../context/Mock";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../redux/action/user/User";

const NavBar = () => {

    const userState = useSelector(state => state.user)
    const mock = useContext(Mock);
    const user = userState?.details;
    const dispatch = useDispatch();

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
                            <>
                                <button className="logout-button nav-button" onClick={() => dispatch(userLogout())}>Logout</button>
                                <NavLink className="user-profile nav-button" to="/userSettings">{`${user.firstname} ${user.lastname}`}
                                    <img className="user-profile-picture" src={user.picture ?? user.pictureBase64} /></NavLink>
                            </>
                        }
                        {!user &&
                            <>
                                <NavLink className="nav-link nav-button" to="/login">Login</NavLink>
                                <NavLink className="nav-link nav-button" to="/register">Sign Up</NavLink>
                            </>
                        }
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;