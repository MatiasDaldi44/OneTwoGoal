import React, { useState, useEffect } from 'react';
import API from "../../utils/API"
import { Link } from "react-router-dom";
import "./styles.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';

const Dropdown = ({ name: country }) => {
    const [searchResult, setSearch] = useState([])
    const [expanded, setExpanded] = React.useState(false);

    useEffect(() => {
        API.getLeaguesFrom(country)
            .then(res =>
                setSearch(res.data.countrys)
            )
            .catch(err => console.log(err));
    }, [])

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '49%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }));

    const classes = useStyles();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <div>
            <Divider />
            <Accordion className={classes.root} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}> </Typography>
                    <Typography className={classes.heading}>{country}</Typography>
                </AccordionSummary>
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
                                </Link>
                            )
                        })
                    )}
            </Accordion>
            <Divider />
        </div>
    );
}

export default Dropdown;