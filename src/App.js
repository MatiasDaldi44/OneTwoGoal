import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar/';
import HomePage from './pages/HomePage';
import AllLeagues from './pages/AllLeagues';
import UserProfile from './pages/UserProfile';
import LogIn from './pages/LogIn';
import LeagueDetails from './pages/LeagueDetails';
import TeamDetails from './pages/TeamDetails';

function App() {
  return (
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
          <Route exact path="/profile">
            <UserProfile />
          </Route>
          <Route exact path="/login">
            <LogIn />
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
  );
}

export default App;