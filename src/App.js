import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, useState } from "react-router-dom";
import NavBar from './components/NavBar/';
import HomePage from './pages/HomePage';
import AllLeagues from './pages/AllLeagues';
import UserProfile from './pages/ProfilePage';
import LogIn from './pages/LogIn';
import LeagueDetails from './pages/LeagueDetails';
import TeamDetails from './pages/TeamDetails';
import "./App.css";
import Redirect from './pages/Redirect';
import { AuthProvider } from './utils/Auth';
import PrivateRoute from './pages/PrivateRoute';
import SignUp from './pages/SignUp';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/leagues">
              <AllLeagues />
            </Route>
            <PrivateRoute exact path="/profile" component={UserProfile} />
            <Route exact path="/redirect">
              <Redirect />
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
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