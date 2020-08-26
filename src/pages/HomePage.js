import React, { useEffect, useState } from 'react';
import API from "../utils/API"
import app from "../base";

// const Home = () => {
//     return (
//       <>
//         <h1>Home</h1>
//         <button onClick={() => app.auth().signOut()}>Sign out</button>
//       </>
//     );
//   };

const HomePage = () => {
    const [liveScores, setScores] = useState([])
    const [dailyMatches, setDailyMatches] = useState([])

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
                        <table className="pure-table">
                            <thead>
                                <tr>
                                    <th>Home</th>
                                    <th>League</th>
                                    <th>Away</th>
                                </tr>
                            </thead>
                            {liveScores.map(scores => {
                                return (
                                    <tbody key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                        <tr className="pure-table-odd" key="liveTr">
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
                        </table>
                    </div>
                )}
            {!dailyMatches ? (
                <h4>Brace Yourselves We Got No Soccer Today</h4>
            ) : (
                    <div>
                        <h3>Today's Matches</h3>
                        <table className="pure-table">
                            <thead>
                                <tr>
                                    <th>Home</th>
                                    <th>League</th>
                                    <th>Away</th>
                                    <th>Local Kick Off Time</th>
                                </tr>
                            </thead>
                            {dailyMatches.map(matches => {
                                return (
                                    <tbody key={Math.floor((Math.random() * 1000000000000) + 1)}>
                                        <tr className="pure-table-odd" key="dailyTr">
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