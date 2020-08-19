import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import API from "../utils/API"

const TeamDetails = () => {
    const [selectedTeam, setTeam] = useState([])

    const { id } = useParams();

    useEffect(() => {
        API.getTeamById(id)
            .then(res => setTeam(res.data.teams))
            .catch(err => console.log(err))
    }, [])

    setTimeout(() => { console.log(selectedTeam) }, 2000)

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
        </div>
    );
}

export default TeamDetails;