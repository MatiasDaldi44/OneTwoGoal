import React, { useEffect, useState } from 'react';
import { useParams, Link, Route } from "react-router-dom";
import API from "../utils/API"
import "../style.css"
import Players from './Players';
import PlayerList from '../components/PlayerList.js';

const TeamDetails = () => {
    const [selectedTeam, setTeam] = useState([])
    const [teamPlayers, setPlayers] = useState([])
    const [leagueId, setLeagueId] = useState([])

    const { id } = useParams();

    useEffect(() => {
        API.getTeamById(id)
            .then(res => {
                setTeam(res.data.teams)
                setLeagueId(res.data.teams[0].idLeague)
            })
            .catch(err => console.log(err))

        API.getPlayersByTeamId(id)
            .then(res => setPlayers(res.data.player))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {!selectedTeam ? (
                <h4>No Results</h4>
            ) : (
                    <div>
                        {selectedTeam.map(team => {
                            return (
                                <div className="media-object stack-for-small">
                                    <div className="media-object-section">
                                        <div className="thumbnail">
                                            <img key={team.strTeamBadge} className="card-img" src={team.strTeamBadge} height="300" width="300" alt="No Badge Found" />
                                        </div>
                                    </div>
                                    <div className="media-object-section">
                                        <h3 key={team.strTeam}>{team.strTeam}</h3>
                                        <h4 key={team.intFormedYear}>{team.intFormedYear}</h4>
                                        <p key={team.strDescriptionEN}>{team.strDescriptionEN}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            }
            <Link to={`/leagues/${leagueId}/${id}/players`} role="button" className="button">
                Player List
            </Link>
            <Route exact path={`/leagues/${leagueId}/${id}/players`} component={PlayerList} />
            {/* {!teamPlayers ? (
                <h4>No Players in Database</h4>
            ) : (
                    <div>
                        <ul>
                            {teamPlayers.map(player => {
                                return (
                                    <li key={player.idPlayer}>
                                        <h4 key={player.strPlayer}>{player.strPlayer}</h4>
                                        <img key={player.strThumb} className="card-img" src={player.strThumb} height="200" width="200" alt="No Headshot Found" />
                                        <p key={player.strPosition}>Role: {player.strPosition}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )} */}
        </div>
    );
}

export default TeamDetails;