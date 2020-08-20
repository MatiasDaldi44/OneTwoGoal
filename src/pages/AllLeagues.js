import React, { useState, useEffect } from 'react';
import API from "../utils/API"
import TopLeagueDropdown from "../components/TopLeagueDropdown"
import RowDropdown from '../components/RowDropdown';

const AllLeagues = () => {
    const [countryList, setCountryList] = useState([])
    const topLeagues = [
        {
            id: 1,
            country: "England"
        },
        {
            id: 2,
            country: "France"
        },
        {
            id: 3,
            country: "Germany"
        },
        {
            id: 4,
            country: "Italy"
        },
        {
            id: 5,
            country: "Spain"
        }
    ]

    useEffect(() => {
        API.getAllCountries()
            .then(res =>
                setCountryList(res.data.countries))
    }, [])

    const handleOnClick = e => {
        e.preventDefault();
        console.log("test")
    }

    return (
        <div>
            <h2>Most Popular</h2>
            {
                topLeagues.map(res => {
                    return <TopLeagueDropdown key={res.id} name={res.country} />
                })
            }
            <br></br>
            <button onClick={handleOnClick}>Placeholder Console Logging Button</button>
            <h3>Rest of World</h3>
            {
                countryList.sort().map(country => {
                    return (
                        <RowDropdown key={country.name_en} name={country.name_en} />
                    )
                })
            }
        </div>
    );
}

export default AllLeagues;