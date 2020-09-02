import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TeamSchedule = () => {
    const [nextGames, setGames] = useState([])

    const { id } = useParams();

    useEffect(() => {
        API.getScheduleByTeam(id)
            .then(res => setGames(res.data.events))
            .catch(err => console.log(err))
    }, [])

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    const classes = useStyles();

    return (
        <div>
            {nextGames ?
                (
                    <>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Competition</TableCell>
                                        <TableCell align="center">Home</TableCell>
                                        <TableCell align="center"></TableCell>
                                        <TableCell align="center">Away</TableCell>
                                        <TableCell align="center">Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {nextGames.map(res => (
                                        <TableRow key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                            <TableCell align="center">
                                                {res.strLeague}
                                            </TableCell>
                                            <TableCell align="center">{res.strHomeTeam}</TableCell>
                                            <TableCell align="center">vs</TableCell>
                                            <TableCell align="center">{res.strAwayTeam}</TableCell>
                                            <TableCell align="center">{res.dateEvent}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                )
                :
                (<h3>Schedule Has Not Been Announced Yet</h3>)
            }
        </div>
    );
}

export default TeamSchedule;