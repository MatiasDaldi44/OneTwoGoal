import React from 'react';
import API from "../utils/API"

const AllLeagues = () => {
    console.log(API.getLeaguesFrom("England"))
    return (
        <div>
            <p>Leagues Test</p>
        </div>
    );
}

export default AllLeagues;