import React, { useEffect, useState } from 'react';
import API from "../utils/API"
import app from "../base";


const HomePage = () => {
    const [liveScores, setScores] = useState([])
    const [dailyMatches, setDailyMatches] = useState([])

    const [MLS, setMLS] = useState([])
    const [RFPL, setRusski] = useState([])

    useEffect(() => {
        API.getLiveScores()
            .then(res => setScores(res.data.events))
            .catch(err => console.log(err))
        const interval = setInterval(() => {
            API.getLiveScores()
                .then(res => setScores(res.data.events))
                .catch(err => console.log(err))
        }, 100000)
        return () => clearInterval(interval)
    }, [])

    const organizeLeagues = () => {
        API.getLiveScores()
            .then(res => {
                let allEvents = res.data.events
                let AMLS = allEvents.filter(games => {
                    return games.strLeague === "American Major League Soccer"
                })
                setMLS(AMLS)
                let Russki = allEvents.filter(games => {
                    return games.strLeague === "Russian Football Premier League"
                })
                setRusski(Russki)
            }
        )
    }

    useEffect(() => {
        API.getDailyMatches()
            .then(res => setDailyMatches(res.data.events))
            .catch(err => console.log(err))
    }, [])

    setTimeout(() => {
        console.log(dailyMatches)
    }, 1000)

    return (
        <div>
            {!liveScores ? (
                <h4>No Matches Currently Playing, Check Out What's Going On Today Down Below</h4>
            ) : (
                    <div>
                        <h3>Current Matches</h3>
                                <table className="unstriped">
                                    <thead>
                                        <tr>
                                            <th className="columns small-4">Home</th>
                                            <th className="columns small-4">League</th>
                                            <th className="columns small-4">Away</th>
                                        </tr>
                                    </thead>
                            {liveScores.map(scores => {
                                return (
                                    <tbody key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                        <tr>
                                            <td></td>
                                            <td>{scores.strLeague}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>{scores.strHomeTeam}</td>
                                            <td>{scores.strProgress}' ({scores.intHomeScore} - {scores.intAwayScore})</td>
                                            <td>{scores.strAwayTeam}</td>
                                        </tr>
                                    </tbody>
                            )
                        })}
                                    {!MLS ? (
                                        <div></div>
                                     ) : (
                                        <tbody key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                                <tr>
                                                    <td></td>
                                                    <td>American Major League Soccer</td>
                                                    <td></td>
                                                </tr>
                                         {MLS.map(res => {
                                             return (
                                                <tr key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                                    <td>{res.strHomeTeam}</td>
                                                    <td>{res.strProgress}' ({res.intHomeScore} - {res.intAwayScore})</td>
                                                    <td>{res.strAwayTeam}</td>
                                                </tr>
                                                )
                                            })}
                                        </tbody>
                                    )}
                                    {!RFPL ? (
                                        null
                                     ) : (
                                        <tbody key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                            <tr>
                                                <td></td>
                                                <td>Russian Football Premier League</td>
                                                <td></td>
                                            </tr>
                                            {RFPL.map(res => {
                                                return (
                                                <tr key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                                    <td>{res.strHomeTeam}</td>
                                                    <td>{res.strProgress}' ({res.intHomeScore} - {res.intAwayScore})</td>
                                                    <td>{res.strAwayTeam}</td>
                                                </tr>
                                                )
                                            })}
                                        </tbody>
                                    )}
                                )
                            })}
                        </table>
                    </div>
                )}
            {!dailyMatches ? (
                <h4>Brace Yourselves We Got No Soccer Today</h4>
            ) : (
                    <div>
                        <h3>Today's Matches</h3>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th className="columns small-3">Home</th>
                                    <th className="columns small-3">League</th>
                                    <th className="columns small-3">Away</th>
                                    <th className="columns small-3">Local Kick Off Time</th>
                                </tr>
                            </thead>
                            {dailyMatches.map(matches => {
                                return (
                                    <tbody key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                        <tr>
                                            <td></td>
                                            <td>{matches.strLeague}</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>{matches.strHomeTeam}</td>
                                            <td>vs</td>
                                            <td>{matches.strAwayTeam}</td>
                                            <td>{matches.strTime}</td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                )}
        </div>
    );
}

export default HomePage;