import React, { useState, useEffect } from 'react';
import API from '../../utils/API'
import { useParams } from "react-router-dom";

const PlayerList = () => {
    const [teamPlayers, setPlayers] = useState([])

    const { id } = useParams();

    useEffect(() => {
        API.getPlayersByTeamId(id)
            .then(res => setPlayers(res.data.player))
            .catch(err => console.log(err))
    }, [])

    setTimeout(() => { console.log(teamPlayers) }, 1000)

    return (
        <div>
            {!teamPlayers ? (
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
                )}
        </div>
    );
}

export default PlayerList;