import React, { useState, useEffect } from 'react';
import API from "../../utils/API"
import "./styles.css"

const RowDropdown = ({ name: country }) => {
    const [open, setOpen] = useState(false);
    const [searchResult, setSearch] = useState({})
    const toggle = () => setOpen(!open);

    useEffect(() => {
        API.getLeaguesFrom(country)
            .then(res =>
                setSearch(res.data.countrys)
            )
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="dd-wrapper">
            <button
                className="dd-header"
                onClick={() => toggle(!open)}
            >
                <p className="dd-header-title-bold">{country}</p>
                <p>{open ? 'Close' : 'Open'}</p>
            </button>

            {open && (
                <ul className="dd-list">
                    {!searchResult ? (
                        <h4>No Results</h4>
                    ) : (
                            searchResult.map(res => {
                                return (
                                    <button className="dd-list-item " key={res.idLeague}>
                                        {res.strLeague}
                                    </button>
                                )
                            })
                        )}
                </ul>
            )}
        </div>
    );
}

export default RowDropdown;