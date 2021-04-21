import React, { useState, useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { ProfileContext } from "../../context/profileContext";

const GenderSelect = () => {
    const ProfileState = useContext(ProfileContext);
    const Profile = ProfileState.profile;
    const [gender, setGender] = useState(Profile.gender);

    console.log(Profile.gender);

    return (
        <FormControl component="fieldset">
            <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
            >
                <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label="Male"
                    checked={gender == "Male"}
                />
                <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label="Female"
                    checked={gender == "Female"}
                />
                <FormControlLabel
                    value="bottom"
                    control={<Radio color="primary" />}
                    label="Others"
                    checked={gender == "Others"}
                />
            </RadioGroup>
        </FormControl>
    );
};

export default GenderSelect;
