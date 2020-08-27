import React from 'react';
import TopLeagueDropdown from "../components/TopLeagueDropdown"
import RowDropdown from '../components/RowDropdown';
import { topLeagues, rowLeagues } from '../utils/CountryList'

const AllLeagues = () => {
    return (
        <div>
            <h2>Most Popular</h2>
            {
                topLeagues.map(res => {
                    return <TopLeagueDropdown key={res.id} name={res.country} />
                })
            }
            <br></br>
            <h3>Rest of World</h3>
            {
                rowLeagues.map(country => {
                    return (
                        <RowDropdown key={country.id} name={country.country} />
                    )
                })
            }
        </div>
    );
}

export default AllLeagues;