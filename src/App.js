import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar/';
import HomePage from './pages/HomePage';
import AllLeagues from './pages/AllLeagues';
import SignUp from "./pages/SignUp";
import UserProfile from './pages/ProfilePage';
import SignIn from './pages/SignIn';
import LeagueDetails from './pages/LeagueDetails';
import TeamDetails from './pages/TeamDetails';
import UserProvider from "./providers/UserProvider";
import { UserContext } from "./providers/UserProvider";


function App() {

  return (
    <UserProvider>

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
              <SignIn />
            </Route>
            <Route exact path="/signUp">
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
    </UserProvider>
  );
}
export default App;