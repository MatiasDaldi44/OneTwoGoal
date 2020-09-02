import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import API from '../../utils/API'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const LeagueTable = () => {
    const [leagueTable, setTable] = useState([])
    const [oldTable, setOldTable] = useState([])

    const { id } = useParams();

    useEffect(() => {
        API.getLeagueTable(id)
            .then(res => setTable(res.data.table))
            .catch(err => console.log(err))
        API.getOldLeagueTable(id)
            .then(res => setOldTable(res.data.table))
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
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell width="200" align="center">#</StyledTableCell>
                            <StyledTableCell width="200" align="center">Team</StyledTableCell>
                            <StyledTableCell width="200" align="center">P</StyledTableCell>
                            <StyledTableCell width="200" align="center">W</StyledTableCell>
                            <StyledTableCell width="200" align="center">D</StyledTableCell>
                            <StyledTableCell width="200" align="center">L</StyledTableCell>
                            <StyledTableCell width="200" align="center">Goals</StyledTableCell>
                            <StyledTableCell width="200" align="center">PTS</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {leagueTable ?
                            leagueTable.map(res => {
                                return (
                                    <StyledTableRow key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                        <StyledTableCell align="center">{leagueTable.indexOf(res) + 1}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Link to={`/leagues/${id}/` + res.teamid} key={res.teamid}>
                                                {res.name}
                                            </Link>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{res.played}</StyledTableCell>
                                        <StyledTableCell align="center">{res.win}</StyledTableCell>
                                        <StyledTableCell align="center">{res.draw}</StyledTableCell>
                                        <StyledTableCell align="center">{res.loss}</StyledTableCell>
                                        <StyledTableCell align="center">{res.goalsfor} : {res.goalsagainst}</StyledTableCell>
                                        <StyledTableCell align="center">{res.total}</StyledTableCell>
                                    </StyledTableRow>
                                )
                            }) :
                            oldTable.map(res => {
                                return (
                                    <StyledTableRow key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                        <StyledTableCell align="center">{leagueTable.indexOf(res) + 1}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Link to={`/leagues/${id}/` + res.teamid} key={res.teamid}>
                                                {res.name}
                                            </Link>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{res.played}</StyledTableCell>
                                        <StyledTableCell align="center">{res.win}</StyledTableCell>
                                        <StyledTableCell align="center">{res.draw}</StyledTableCell>
                                        <StyledTableCell align="center">{res.loss}</StyledTableCell>
                                        <StyledTableCell align="center">{res.goalsfor} : {res.goalsagainst}</StyledTableCell>
                                        <StyledTableCell align="center">{res.total}</StyledTableCell>
                                    </StyledTableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default LeagueTable;