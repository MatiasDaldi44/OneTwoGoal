import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();

    return (
        <div>
            {!teamPlayers ? (
                <h4>No Players in Database</h4>
            ) : (
                    <div>
                        <ul>
                            {teamPlayers.map(player => {
                                return (
                                    <List fullWidth component="nav" className={classes.root} aria-label="mailbox folders">
                                        <ListItem alignItems="center">
                                            <ListItemText>
                                                <h4 key={player.strPlayer}>{player.strPlayer}</h4>
                                                <img
                                                    key={player.strThumb}
                                                    className="card-img"
                                                    src={player.strThumb}
                                                    height="200"
                                                    width="200"
                                                    alt="No Headshot Found"
                                                />
                                                <p key={player.strPosition}>Role: {player.strPosition}</p>
                                            </ListItemText>
                                        </ListItem>
                                        <Divider />
                                    </List>
                                )
                            })}
                        </ul>
                    </div>
                )}
        </div>
    );
}

export default PlayerList;