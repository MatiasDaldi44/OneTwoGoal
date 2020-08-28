import React, { useContext } from 'react';
import { AuthContext } from "../utils/Auth"
import app from "../config/base"
import logo from './onetwogoal.jpg'

const ProfilePage = () => {
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser.email)
    return (
        <div>
          <img src={logo} alt="onetwogoal" height="200" width="200" />
            <h1>Welcome to One-Two Goal</h1>
            <h2> {currentUser.email} </h2>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    );
}

export default ProfilePage;