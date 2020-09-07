import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import API from "../utils/API"
import "../style.css"
import PlayerList from '../components/PlayerList';
import TeamSchedule from '../components/TeamSchedule'
import { Tabs, Tab } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const TeamDetails = () => {
    const [selectedTeam, setTeam] = useState([])
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const { id } = useParams();

    useEffect(() => {
        API.getTeamById(id)
            .then(res => setTeam(res.data.teams))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    {!selectedTeam ? (
                        <h4>No Results</h4>
                    ) : (
                            <div>
                                {selectedTeam.map(team => {
                                    return (
                                        <div className="media-object stack-for-small" key={team.strTeam}>
                                            <div className="media-object-section">
                                                <div className="thumbnail">
                                                    <img
                                                        key={team.strTeamBadge}
                                                        className="card-img"
                                                        src={team.strTeamBadge}
                                                        height="275"
                                                        width="275"
                                                        alt="No Badge Found"
                                                    />
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
                </Container>
            </React.Fragment>
            <div>
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    centered
                >
                    <Tab label="Team Schedule" />
                    <Tab label="Players" />
                </Tabs>
                {selectedTab === 0 && <TeamSchedule />}
                {selectedTab === 1 && <PlayerList />}
            </div>
        </div>
    );
}

export default TeamDetails;