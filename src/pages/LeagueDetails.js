import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import API from "../utils/API"

const LeagueDetails = () => {
    const [league, setLeague] = useState([])

    const { id } = useParams();

    useEffect(() => {
        API.getLeagueById(id)
            .then(res => setLeague(res.data.teams))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <ul>
                {!league ? (
                    <h4>No Results</h4>
                ) : (
                        <div>
                            <h1>League Name Will Go Here</h1>
                            {league.map(team => {
                                return (
                                    <Link to={`/leagues/${id}/` + team.idTeam} key={team.idTeam}>
                                        <button className="dd-list-item" key={team.idTeam} id={team.idTeam}>
                                            {team.strTeam}
                                        </button>
                                    </Link>
                                )
                            })}
                        </div>
                    )}
            </ul>
        </div>
    );
}

export default LeagueDetails;