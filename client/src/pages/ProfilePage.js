import React, { useContext, useState } from 'react';
import { AuthContext } from "../utils/Auth"
import app from "../config/base"
import logo from './onetwogoal.jpg'
import noPic from './user-xxl.png'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext)
  const [image, setImage] = useState('')

  const uploadImage = async e => {
    const files = e.target.files[0]
    app.storage().ref('users/' + currentUser.uid + '/profile.jpg').put(files)
      .then(() => {
        app.storage().ref('users/' + currentUser.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
          setImage(imgUrl);
        })
      })
  }

  if (currentUser) {
    app.storage().ref('users/' + currentUser.uid + '/profile.jpg').getDownloadURL().then(imgUrl => {
      setImage(imgUrl);
    })
  }

  const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 0,
      paddingTop: '100%'
    },
  });

  const classes = useStyles();

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div>
            <img src={logo} alt="onetwogoal" height="200" width="200" />
            <h1>Welcome to One-Two Goal</h1>
          </div>
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={3} alignContent="flex-end">
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={image ? image : noPic}
              height="200"
              width="200"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {currentUser.email}
              </Typography>
            </CardContent>
            <CardActions>
              <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={uploadImage}
              />
              <Button onClick={() => app.auth().signOut()} size="small" color="primary">
                Sign Out
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}










export default ProfilePage;