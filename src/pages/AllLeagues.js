import React from 'react';
import Dropdown from "../components/Dropdown"
import { topLeagues, rowLeagues } from '../utils/CountryList'

const AllLeagues = () => {
    return (
        <div>
            <h2>Most Popular</h2>
            {
                topLeagues.map(res => {
                    return <Dropdown key={res.id} name={res.country} />
                })
            }
            <br></br>
            <h3>Rest of World</h3>
            {
                rowLeagues.map(res => {
                    return (
                        <Dropdown key={res.id} name={res.country} />
                    )
                })
            }
        </div>
    );
}

export default AllLeagues;