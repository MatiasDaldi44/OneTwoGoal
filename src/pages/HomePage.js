import React from 'react';

const HomePage = () => {
    return (
        <table className="pure-table">
            <thead>
                <tr>
                    <th>Home</th>
                    <th>League</th>
                    <th>Away</th>
                </tr>
            </thead>
            <tbody>
                <tr className="pure-table-odd">
                    <td> </td>
                    <td>MLS</td>
                    <td> </td>
                </tr>
                <tr>
                    <td>Orlando</td>
                    <td>(0 - 1)</td>
                    <td>LA Galaxy</td>
                </tr>
                <tr>
                    <td>Inter Miami</td>
                    <td>(1 - 0)</td>
                    <td>NYCFC</td>
                </tr>
                <tr className="pure-table-odd">
                    <td> </td>
                    <td>Serie B</td>
                    <td> </td>
                </tr>
                <tr>
                    <td>Perguia</td>
                    <td>(2 - 1)</td>
                    <td>Pescara</td>
                </tr>
                <tr className="pure-table-odd">
                    <td> </td>
                    <td>Pro League</td>
                    <td> </td>
                </tr>
                <tr>
                    <td>KRC Genk</td>
                    <td>(3 - 1)</td>
                    <td>Oud-Heverlee Leuven</td>
                </tr>
                <tr className="pure-table-odd">
                    <td> </td>
                    <td>Brasileiro Serie A</td>
                    <td> </td>
                </tr>
                <tr>
                    <td>Gremio</td>
                    <td>(0 - 0)</td>
                    <td>Corinthians</td>
                </tr>
                <tr>
                    <td>Coritibia</td>
                    <td>(2 - 4)</td>
                    <td>Flamengo</td>
                </tr>
                <tr className="pure-table-odd">
                    <td> </td>
                    <td>Parva Liga</td>
                    <td> </td>
                </tr>
                <tr>
                    <td>Lokomotiv Plovdiv</td>
                    <td>(3 - 1)</td>
                    <td>Botev Vratsa</td>
                </tr>
                <tr className="pure-table-odd">
                    <td> </td>
                    <td>Canadian Premier League</td>
                    <td> </td>
                </tr>
                <tr>
                    <td>York 9 FC</td>
                    <td>(8 - 2)</td>
                    <td>Atletico Ottawa</td>
                </tr>
                <tr>
                    <td>HFX Wanderers FC</td>
                    <td>(1 - 2)</td>
                    <td>Pacific FC</td>
                </tr>
            </tbody>
        </table>
    );
}

export default HomePage;