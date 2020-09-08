import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CurrentMatches = () => {
    const [liveScores, setScores] = useState([])

    let sortedLiveScore;

    if (liveScores !== null) {
        sortedLiveScore = liveScores.sort((a, b) => {
            var leagueA = a.strLeague.toUpperCase();
            var leagueB = b.strLeague.toUpperCase();
            if (leagueA < leagueB) {
                return -1
            }
            if (leagueA > leagueB) {
                return 1
            }
            return 0;
        })
    }

    useEffect(() => {
        API.getLiveScores()
            .then(res => setScores(res.data.events))
            .catch(err => console.log(err))
        const interval = setInterval(() => {
            API.getLiveScores()
                .then(res => setScores(res.data.events))
                .catch(err => console.log(err))
        }, 100000)
        return () => clearInterval(interval)
    }, [])

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });

    const classes = useStyles();

    return (
        <>
            {!liveScores ? (
                <>
                    <h3>Current Matches</h3>
                    <br></br>
                    <h4>No Matches Currently Playing, Check Out What's Going On Today Down Below</h4>
                </>
            ) : (
                    <div>
                        <h3>Current Matches</h3>
                        <p></p>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell width="200" align="center">Home</StyledTableCell>
                                        <StyledTableCell width="200" align="center">League</StyledTableCell>
                                        <StyledTableCell width="200" align="center">Away</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                {sortedLiveScore.map(scores => (
                                    <TableBody key={scores.strHomeTeam}>
                                        <StyledTableRow>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center">{scores.strLeague}</StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <StyledTableCell align="center">{scores.strHomeTeam}</StyledTableCell>
                                            <StyledTableCell align="center">
                                                {scores.strProgress}' ({scores.intHomeScore} - {scores.intAwayScore})
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{scores.strAwayTeam}</StyledTableCell>
                                        </StyledTableRow>
                                    </TableBody>
                                ))}
                            </Table>
                        </TableContainer>
                    </div>
                )}
        </>
    );
}

export default CurrentMatches;