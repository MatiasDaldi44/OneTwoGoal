import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import API from "../utils/API"

const LeagueDetails = () => {
    const [league, setLeague] = useState([])
    const [headerTitle, setTitle] = useState([])
    const [leagueBadge, setBadge] = useState([])
    const [leagueTable, setTable] = useState([])
    const [oldTable, setOldTable] = useState([])
    const [allGames, setGames] = useState([])

    let sortedGames;

    if (allGames !== null) {
        sortedGames = allGames.sort((x, y) => {
            return x.intRound - y.intRound;
        })
    }

    const { id } = useParams();

    useEffect(() => {
        API.getLeagueById(id)
            .then(res => setLeague(res.data.teams))
            .catch(err => console.log(err))
        API.getHeader(id)
            .then(res => {
                setTitle(res.data.leagues[0].strLeague)
                setBadge(res.data.leagues[0].strBadge)
            })
            .catch(err => console.log(err))
        API.getLeagueTable(id)
            .then(res => setTable(res.data.table))
            .catch(err => console.log(err))
        API.getLeagueGames(id)
            .then(res => setGames(res.data.events))
            .catch(err => console.log(err))
        API.getOldLeagueTable(id)
            .then(res => setOldTable(res.data.table))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1><img key="leagueBadge" src={leagueBadge} height="75" width="75" alt="No Badge Found" /> {headerTitle}</h1>
            <div>
                <table className="striped">
                    <thead>
                        <tr>
                            <th className="columns small-2">#</th>
                            <th className="columns small-2">Team</th>
                            <th className="columns small-2">P</th>
                            <th className="columns small-2">W</th>
                            <th className="columns small-2">D</th>
                            <th className="columns small-2">L</th>
                            <th className="columns small-2">Goals</th>
                            <th className="columns small-2">PTS</th>
                        </tr>
                    </thead>
                    {leagueTable ?
                        leagueTable.map(res => {
                            return (
                                <tbody key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                    <tr>
                                        <td>{leagueTable.indexOf(res) + 1}</td>
                                        <td>
                                            <Link to={`/leagues/${id}/` + res.teamid} key={res.teamid}>
                                                {res.name}
                                            </Link>
                                        </td>
                                        <td>{res.played}</td>
                                        <td>{res.win}</td>
                                        <td>{res.draw}</td>
                                        <td>{res.loss}</td>
                                        <td>{res.goalsfor} : {res.goalsagainst}</td>
                                        <td>{res.total}</td>
                                    </tr>
                                </tbody>
                            )
                        }) :
                        oldTable.map(res => {
                            return (
                                <tbody key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                    <tr>
                                        <td>{oldTable.indexOf(res) + 1}</td>
                                        <td>
                                            <Link to={`/leagues/${id}/` + res.teamid} key={res.teamid}>
                                                {res.name}
                                            </Link>
                                        </td>
                                        <td>{res.played}</td>
                                        <td>{res.win}</td>
                                        <td>{res.draw}</td>
                                        <td>{res.loss}</td>
                                        <td>{res.goalsfor} : {res.goalsagainst}</td>
                                        <td>{res.total}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
            <br></br>
            {allGames ?
                <div>
                    <h3>Schedule</h3>
                    <table className="striped">
                        <thead>
                            <tr>
                                <th className="columns small-3">Round</th>
                                <th className="columns small-3">Home</th>
                                <th className="columns small-3"></th>
                                <th className="columns small-3">Away</th>
                                <th className="columns small-3">Date</th>
                            </tr>
                        </thead>
                        {sortedGames.map(res => {
                            return (
                                <tbody key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                    <tr>
                                        <td>{res.intRound}</td>
                                        <td>{res.strHomeTeam}</td>
                                        <td>
                                            {res.intHomeScore ? `${res.intHomeScore} - ${res.intAwayScore}` : "vs"}
                                        </td>
                                        <td>{res.strAwayTeam}</td>
                                        <td>{res.dateEvent}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
                :
                (<h1>2020/2021 Schedule Has Not Been Announce Yet</h1>)
            }
            <br></br>
            {/* <ul>
                {!league ? (
                    <h4>No Results</h4>
                ) : (
                        <div>
                            {league.map(team => {
                                return (
                                    <Link to={`/leagues/${id}/` + team.idTeam} key={team.idTeam}>
                                        <button className="button secondary expanded" key={team.idTeam} id={team.idTeam}>
                                            <img key={team.strTeamBadge} className="card-img" src={team.strTeamBadge} height="25" width="25" alt="No Badge Found" />
                                            {team.strTeam}
                                        </button>
                                    </Link>
                                )
                            })}
                        </div>
                    )}
            </ul> */}
        </div>
    );
}

export default LeagueDetails;