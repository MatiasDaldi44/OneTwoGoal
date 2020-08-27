import React, { useContext } from 'react';
import { AuthContext } from "../utils/Auth"
import app from "../config/base"

const ProfilePage = () => {
    const { currentUser } = useContext(AuthContext)
    console.log(currentUser.email)
    return (
        <div>
            <h1>Welcome {currentUser.email}</h1>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div>
    );
}

export default ProfilePage;