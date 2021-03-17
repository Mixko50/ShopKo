import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FontDownload } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from '@material-ui/core';
import Link from 'next/link'

export default function Dropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(event) => {
                    setAnchorEl(event.currentTarget);
                }} >
                <FontAwesomeIcon icon={faCaretDown} style={{ width: 24, height: 24 }} color="black" />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link href="../home"><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                <Link href="../account/profile"><MenuItem onClick={handleClose}>My account</MenuItem></Link>
                <Link href="/login"><MenuItem onClick={handleClose}>Logout</MenuItem></Link>
            </Menu>
        </div>
    );
}