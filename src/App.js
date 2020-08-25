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
import Application from './pages/Application';
import { AuthProvider } from "./AuthPage";
import PrivateRoute from "./PrivateRoute";
import "./App.css";


const App = () => {
   
  return (
    <AuthProvider>
    
    <Router>
      <div>
        <NavBar />
        <Switch>
         
          <Route exact path="/application">
            <Application />
          </Route>
          <Route exact path="/leagues">
            <AllLeagues />
          </Route>
          <Route exact path="/profile">
            <UserProfile />
          </Route>
          <Route exact path="/login">
            <LogIn/>
            </Route>
        <Route exact path="/signin">
          <SignUp/>
        </Route>
        
        <PrivateRoute exact path="/" component={HomePage} />

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