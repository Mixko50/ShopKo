import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Style from '../../components/ProductItems/ProductItems'
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));



export const ProductQuantity = () => {
    const classes = useStyles();
    const [count, setCount] = useState(1)


    return (

        <Box style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-around' }}>
            <IconButton label="delete" className={classes.margin} onClick={setCount.bind(this, count == 1 ? count : count - 1)} >
                <FontAwesomeIcon icon={faMinus} />
            </IconButton >
            <h3>{count}</h3>
            <IconButton aria-label="delete" className={classes.margin} onClick={setCount.bind(this, count + 1)}>
                <FontAwesomeIcon icon={faPlus} />
            </IconButton>
        </Box >
    );
}
