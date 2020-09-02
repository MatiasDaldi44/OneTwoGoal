import React, { useState, useEffect } from 'react';
import API from "../../utils/API"
import { Link } from "react-router-dom";
import "./styles.css"
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { grey } from '@material-ui/core/colors';

const Dropdown = ({ name: country }) => {
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

    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(grey[500]),
            backgroundColor: grey[500],
            '&:hover': {
                backgroundColor: grey[700],
            },
        },
    }))(Button);

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <ColorButton
                fullWidth
                size="large"
                variant="contained"
                color="primary"
                className={classes.margin}
                onClick={() => toggle(!open)}
            >
                {country}
                {/* {open ? 'Close' : 'Open'} */}
                {/* <p>{open ? 'Close' : 'Open'}</p> */}
            </ColorButton>

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
                                        <Button
                                            fullWidth
                                            size="large"
                                            variant="outlined"
                                            key={league.idLeague}
                                            id={league.idLeague}
                                        >
                                            {league.strLeague}
                                        </Button>
                                        <br></br>
                                    </Link>
                                )
                            })
                        )}
                </div>
            )}
        </div>
    );
}

export default Dropdown;