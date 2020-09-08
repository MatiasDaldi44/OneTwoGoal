import React from 'react';
import { Link, useLocation, Redirect, Route } from "react-router-dom";
import logo from './onetwogoal.jpg'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomePage from '../../pages/HomePage';
import AllLeagues from '../../pages/AllLeagues';
import ProfilePage from '../../pages/ProfilePage';
import LogIn from '../../pages/LogIn';
import SignUp from '../../pages/SignUp';

const NavBar = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    //const location = useLocation();

    return (
        <>
            <Tabs
                value={selectedTab}
                onChange={handleChange}
                centered
            >
                <Tab label="Home" to="/" component={Link} />
                <Tab label="All Leagues" to="/leagues" component={Link} />
                <Tab label="Profile Page" to="/profile" component={Link} />
                <Tab label="Log In" to="/login" component={Link} />
                <Tab label="Sign Up" to="/signup" component={Link} />
            </Tabs>
            {/* {selectedTab === 0 && <Redirect exact path="/" />}
            {selectedTab === 1 && <Redirect exact path="/leagues" />}
            {selectedTab === 2 && <ProfilePage />}
            {selectedTab === 3 && <LogIn />}
            {selectedTab === 4 && <SignUp />} */}
        </>
        // <div className="top-bar">
        //     <div className="top-bar-left">
        //         <ul className="dropdown menu" data-dropdown-menu>
        //             <img src={logo} alt="onetwogoal" height="25" width="50" />
        //             <li className="menu-text">One-Two Goal</li>
        //             <li>
        //                 <Link to="/" className={location.pathname === "/" ? "active" : "disactive"}>
        //                     Home
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/leagues" className={location.pathname === "/leagues" ? "active" : "disactive"}>
        //                     All Leagues
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/profile" className={location.pathname === "/profile" ? "active" : "disactive"}>
        //                     Profile
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/login" className={location.pathname === "/login" ? "active" : "disactive"}>
        //                     Log In
        //                 </Link>
        //             </li>
        //             <li>
        //                 <Link to="/signup" className={location.pathname === "/signup" ? "active" : "disactive"}>
        //                     Sign Up
        //                 </Link>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    );
}

export default NavBar;