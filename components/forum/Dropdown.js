import React, { useContext } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@material-ui/core";
import Link from "next/link";
import axios from "../../utils/axios";
import { ProfileContext } from "../../context/profileContext";

export default function Dropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const profileContext = useContext(ProfileContext);
    const profile = profileContext.profile;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        try {
            axios.post("/account/logout");
        } catch (error) {
            console.log("Error");
        }
    };

    return (
        <div>
            <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(event) => {
                    setAnchorEl(event.currentTarget);
                }}
            >
                <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ width: 24, height: 24 }}
                    color="black"
                />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link href="../account/profile">
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <Link href="../account/myorder">
                    <MenuItem onClick={handleClose}>My order</MenuItem>
                </Link>
                <Link href="/login">
                    <MenuItem
                        onClick={() => {
                            handleClose();
                            logout();
                        }}
                    >
                        Logout
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    );
}
