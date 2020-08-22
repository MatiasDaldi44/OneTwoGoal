import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import API from "../utils/API"

const TeamDetails = () => {
    const [selectedTeam, setTeam] = useState([])
    const [teamPlayers, setPlayers] = useState([])

    const { id } = useParams();

    useEffect(() => {
        API.getTeamById(id)
            .then(res => setTeam(res.data.teams))
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
                                <div key={team.strTeam}>
                                    <h1 key={team.strTeam}>{team.strTeam}</h1>
                                    <p key={team.intFormedYear}>{team.intFormedYear}</p>
                                    <p key={team.strStadium}>{team.strStadium}</p>
                                    <p key={team.strDescriptionEN}>Overview: {team.strDescriptionEN}</p>
                                </div>
                            )
                        })}
                    </div>
                )}
            {!teamPlayers ? (
                <h4>No Players in Database</h4>
            ) : (
                    <div>
                        <ul>
                            {teamPlayers.map(player => {
                                return (
                                    <li key={player.idPlayer}>
                                        <h4 key={player.strPlayer}>{player.strPlayer}</h4>
                                        <img key={player.strThumb} className="card-img" src={player.strThumb} height="200" width="200" alt="No Image Found" />
                                        <p key={player.strPosition}>Role: {player.strPosition}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
        </div>
    );
}

export default TeamDetails;