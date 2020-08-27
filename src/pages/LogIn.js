import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router"
import app from "../config/base"
import { AuthContext } from "../utils/Auth"

const LogIn = ({ history }) => {
  const handleLogIn = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }, [history])

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/profile" />
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleLogIn}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default withRouter(LogIn);