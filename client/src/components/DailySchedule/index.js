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

const DailySchedule = () => {
    const [dailyMatches, setDailyMatches] = useState([])

    let sortedDailySchedule;

    if (dailyMatches !== null) {
        sortedDailySchedule = dailyMatches.sort((a, b) => {
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
        API.getDailyMatches()
            .then(res => setDailyMatches(res.data.events))
            .catch(err => console.log(err))
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
            {!dailyMatches ? (
                <>
                    <h3>Today's Matches</h3>
                    <br></br>
                    <h4>Brace Yourselves We Got No Soccer Today</h4>
                </>
            ) : (
                    <div>
                        <h3>Today's Matches</h3>
                        <p></p>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell width="150" align="center">Home</StyledTableCell>
                                        <StyledTableCell width="150" align="center">League</StyledTableCell>
                                        <StyledTableCell width="150" align="center">Away</StyledTableCell>
                                        <StyledTableCell width="150" align="center">Kick Off Time (GMT+1)</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                {sortedDailySchedule.map(matches => (
                                    <TableBody key={matches.strHomeTeam}>
                                        <StyledTableRow>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center">{matches.strLeague}</StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                            <StyledTableCell align="center"></StyledTableCell>
                                        </StyledTableRow>
                                        <StyledTableRow>
                                            <StyledTableCell align="center">{matches.strHomeTeam}</StyledTableCell>
                                            <StyledTableCell align="center">vs</StyledTableCell>
                                            <StyledTableCell align="center">{matches.strAwayTeam}</StyledTableCell>
                                            <StyledTableCell align="center">{matches.strTime}</StyledTableCell>
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

export default DailySchedule;