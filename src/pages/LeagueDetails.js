import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import API from "../utils/API"

const LeagueDetails = () => {
    const [league, setLeague] = useState([])
    const [headerTitle, setTitle] = useState([])

    const { id } = useParams();

    useEffect(() => {
        API.getLeagueById(id)
            .then(res => setLeague(res.data.teams))
            .catch(err => console.log(err))
        API.getHeader(id)
            .then(res => setTitle(res.data.leagues[0].strLeague))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <ul>
                {!league ? (
                    <h4>No Results</h4>
                ) : (
                        <div>
                            <h1>{headerTitle}</h1>
                            {league.map(team => {
                                return (
                                    <Link to={`/leagues/${id}/` + team.idTeam} key={team.idTeam}>
                                        <button className="button secondary expanded" key={team.idTeam} id={team.idTeam}>
                                            <img key={team.strTeamBadge} className="card-img" src={team.strTeamBadge} height="25" width="25" alt="No Image Found" />
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