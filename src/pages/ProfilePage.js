import React, { useContext, useState } from 'react';
import { AuthContext } from "../utils/Auth"
import app from "../config/base"
import logo from './onetwogoal.jpg'
import '../App.css'

const ProfilePage = () => {
    const { currentUser } = useContext(AuthContext)
    const [image, setImage] = useState('')
  
    const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'crscode')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/crscode/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }

  const [loading, setLoading] = useState(false)
    console.log(currentUser.email)

  return (
    <div className="App">
      <h1>Upload ProfileImage</h1>
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: '300px' }} />
      )} 
      <center><div>
          <img src={logo} alt="onetwogoal" height="200" width="200" />
            <h1>Welcome to One-Two Goal</h1>
            <h2> {currentUser.email} </h2>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
        </div></center>
    </div>
  )
}
    
       
    



  



export default ProfilePage;