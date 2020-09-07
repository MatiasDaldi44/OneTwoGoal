import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import API from "../utils/API"
import LeagueTable from '../components/LeagueTable';

const LeagueDetails = () => {
    const [headerTitle, setTitle] = useState([])
    const [leagueBadge, setBadge] = useState([])
    const [allGames, setGames] = useState([])

    let sortedGames;

    if (allGames !== null) {
        sortedGames = allGames.sort((x, y) => {
            return x.intRound - y.intRound;
        })
    }

    const { id } = useParams();

    useEffect(() => {
        API.getHeader(id)
            .then(res => {
                setTitle(res.data.leagues[0].strLeague)
                setBadge(res.data.leagues[0].strBadge)
            })
            .catch(err => console.log(err))
        API.getLeagueGames(id)
            .then(res => setGames(res.data.events))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1><img key="leagueBadge" src={leagueBadge} height="75" width="75" alt="No Badge Found" /> {headerTitle}</h1>
            <LeagueTable />
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
        </div>
    );
}

export default LeagueDetails;