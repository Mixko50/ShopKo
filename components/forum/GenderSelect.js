import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const GenderSelect = (props) => {
    const [gender, setGender] = useState(props.gender);
    useEffect(() => {
        if (props.gender) {
            setGender(props.gender);
        }
    }, [props.gender]);

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
            >
                <FormControlLabel
                    value="Male"
                    control={<Radio color="primary" />}
                    label="Male"
                    checked={gender == "Male"}
                    onChange={handleChange}
                />
                <FormControlLabel
                    value="Female"
                    control={<Radio color="primary" />}
                    label="Female"
                    checked={gender == "Female"}
                    onChange={handleChange}
                />
                <FormControlLabel
                    value="Others"
                    control={<Radio color="primary" />}
                    label="Others"
                    checked={gender == "Others"}
                    onChange={handleChange}
                />
            </RadioGroup>
        </FormControl>
    );
};

export default GenderSelect;
