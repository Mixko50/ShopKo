import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function AddressSelect({ data, title, current, setCurrent }) {
    const classes = useStyles();
    const handleChange = (event) => {
        setCurrent(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl} margin="normal">
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={current}
                    onChange={handleChange}
                >
                    {data.map((el) => (
                        <MenuItem value={el}>{el}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
