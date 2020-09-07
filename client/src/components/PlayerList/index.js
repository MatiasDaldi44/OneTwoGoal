import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container'
import noPic from '../../pages/user-xxl.png'

const PlayerList = () => {
    const [teamPlayers, setPlayers] = useState([])

    const { id } = useParams();

    useEffect(() => {
        API.getPlayersByTeamId(id)
            .then(res => setPlayers(res.data.player))
            .catch(err => console.log(err))
    }, [])

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();

    return (
        <div>
            {!teamPlayers ? (
                <h4>No Players in Database</h4>
            ) : (
                    <Container maxWidth="lg">
                        <List component="nav" className={classes.root}>
                            {teamPlayers.map(player => {
                                return (
                                    <>
                                        <Divider />
                                        <ListItem key={player.strPlayer}>
                                            <ListItemText>
                                                {player.strThumb ? (
                                                    <img
                                                        key={player.strThumb}
                                                        className="card-img"
                                                        src={player.strThumb}
                                                        height="200"
                                                        width="200"
                                                        alt=" "
                                                    />
                                                ) : (
                                                        <img
                                                            key={player.strThumb}
                                                            className="card-img"
                                                            src={noPic}
                                                            height="200"
                                                            width="200"
                                                            alt=" "
                                                        />
                                                    )}
                                            </ListItemText>
                                            <ListItemText>
                                                <h4>{player.strPlayer}</h4>
                                            </ListItemText>
                                            <ListItemText>
                                                <p>Role: {player.strPosition}</p>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider />
                                    </>
                                )
                            })}
                        </List>
                    </Container>
                )}
        </div>
    );
}

export default PlayerList;