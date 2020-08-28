import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from './onetwogoal.jpg'

const NavBar = () => {

    const location = useLocation();

    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                <img src={logo} alt="onetwogoal" height="25" width="50" /> 
                    <li className="menu-text">One-Two Goal</li>
                    <li>
                        <Link to="/" className={location.pathname === "/" ? "active" : "disactive"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/leagues" className={location.pathname === "/leagues" ? "active" : "disactive"}>
                            All Leagues
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" className={location.pathname === "/profile" ? "active" : "disactive"}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className={location.pathname === "/login" ? "active" : "disactive"}>
                            Log In
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup" className={location.pathname === "/signup" ? "active" : "disactive"}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default NavBar;