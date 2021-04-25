import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "../../utils/axios";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function BirthdaySelect(props) {
    const classes = useStyles();
    const [birthdate, setbirthdate] = useState(props.birthdate);

    const updateBirthdate = (ev) => {
        axios.post("/setting/profile/birthdate", {
            birthdate: ev,
        });
    };

    return (
        <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Birthday"
                type="date"
                value={props.birthdate}
                className={classes.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(ev) => {
                    updateBirthdate(ev.target.value);
                }}
            />
        </form>
    );
}
