import React, { useState, useEffect } from 'react';
import API from "../../utils/API"
import { Link } from "react-router-dom";
import "./styles.css"

const TopLeagueDropdown = ({ name: country }) => {
    const [open, setOpen] = useState(false);
    const [searchResult, setSearch] = useState([])
    const toggle = () => setOpen(!open);

    useEffect(() => {
        API.getLeaguesFrom(country)
            .then(res =>
                setSearch(res.data.countrys)
            )
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <button
                className="dropdown button secondary expanded"
                onClick={() => toggle(!open)}
            >
                {country}
                {/* {open ? 'Close' : 'Open'} */}
                {/* <p>{open ? 'Close' : 'Open'}</p> */}
            </button>

            {open && (
                <div>
                    {!searchResult ? (
                        <h4>No Results</h4>
                    ) : (
                            searchResult.map(league => {
                                return (
                                    <Link
                                        to={"/leagues/" + league.idLeague}
                                        key={league.idLeague}
                                        leaguename={league.strLeague}
                                    >
                                        <button className="hollow button secondary expanded" key={league.idLeague} id={league.idLeague}>
                                            {league.strLeague}
                                        </button>
                                    </Link>
                                )
                            })
                        )}
                </div>
            )}
        </div>
    );
}

export default TopLeagueDropdown;