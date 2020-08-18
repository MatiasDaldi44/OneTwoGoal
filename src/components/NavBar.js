import React from 'react';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {

    const location = useLocation();

    return (
        <div className="pure-menu pure-menu-horizontal">
            <p className="pure-menu-heading pure-menu-link">
                <Link to="/" className={location.pathname === "/" ? "pure-menu-link" : "pure-menu-link"}>
                    One-Two Goal
                </Link>
            </p>
            <ul className="pure-menu-list">
                <li className="pure-menu-item">
                    <Link to="/leagues" className={location.pathname === "/leagues" ? "pure-menu-link" : "pure-menu-link"}>
                        All Leagues
                    </Link>
                </li>
                <li className="pure-menu-item">
                    <Link to="/profile" className={location.pathname === "/profile" ? "pure-menu-link" : "pure-menu-link"}>
                        Profile
                    </Link>
                </li>
                <li className="pure-menu-item">
                    <Link to="/login" className={location.pathname === "/login" ? "pure-menu-link" : "pure-menu-link"}>
                        Log In
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;