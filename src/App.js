import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import NavBar from './components/NavBar/';
import HomePage from './pages/HomePage';
import AllLeagues from './pages/AllLeagues';
import UserProfile from './pages/ProfilePage';
import SignUp from './SignUp';
import LogIn from './LogIn';
import LeagueDetails from './pages/LeagueDetails';
import TeamDetails from './pages/TeamDetails';
import { AuthProvider } from "./AuthPage";
import "./App.css";
import ProfilePage from './pages/ProfilePage';
import Home from './Home';
import PrivateRoute from './PrivateRoute'


const App = () => {

    return (
        <AuthProvider>

            <Router>
                <div>
                    <NavBar />
                    <Switch>
                    <PrivateRoute exact path="/profile" component={Home} />
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route exact path="/leagues">
                            <AllLeagues />
                        </Route>
                        <Route exact path="/profile">
                            <UserProfile />
                        </Route>
                        <Route exact path="/signup">
                            <LogIn />
                        </Route>
                        <Route exact path="/signin">
                            <SignUp />
                        </Route>
                        <Route exact path="/profile">
                            <ProfilePage />
                        </Route>
                        <Route exact path="/leagues/:id">
                            <LeagueDetails />
                        </Route>
                        <Route exact path="/leagues/:id/:id">
                            <TeamDetails />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </AuthProvider>
    );
}
export default App;