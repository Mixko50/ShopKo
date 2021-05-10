import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { Router, useRouter } from "next/router";
import { ProfileContext } from "../../context/profileContext";

const useStyles = makeStyles((theme) => ({
    root: {
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        right: 50,
        bottom: 30,
    },
    exampleWrapper: {
        position: "relative",
        marginTop: theme.spacing(3),
        height: 380,
    },
    radioGroup: {
        margin: theme.spacing(1, 0),
    },
    speedDial: {
        position: "absolute",
        "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
            top: theme.spacing(2),
            left: theme.spacing(2),
        },
    },
}));

export const SpeedDials = () => {
    const router = useRouter();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const profileContext = useContext(ProfileContext);
    const profile = profileContext.profile;

    const actions = [
        {
            icon: (
                <ExitToAppIcon
                    style={{ color: "#ff75a0" }}
                    onClick={() => {
                        router.push("/login");
                    }}
                />
            ),
            name: "Logout",
        },
        {
            icon: (
                <ShoppingBasketIcon
                    style={{ color: "#ff75a0" }}
                    onClick={() => {
                        if (profile.isLoggedIn) {
                            router.push("/account/myorder");
                        } else {
                            router.push("/login");
                        }
                    }}
                />
            ),
            name: "My Order",
        },
        {
            icon: (
                <ShoppingCartIcon
                    style={{ color: "#ff75a0" }}
                    onClick={() => {
                        if (profile.isLoggedIn) {
                            router.push("/cart");
                        } else {
                            router.push("/login");
                        }
                    }}
                />
            ),
            name: "Cart",
        },
        {
            icon: (
                <PersonIcon
                    style={{ color: "#ff75a0" }}
                    onClick={() => {
                        if (profile.isLoggedIn) {
                            router.push("/account/profile");
                        } else {
                            router.push("/login");
                        }
                    }}
                />
            ),
            name: "Profile",
        },
        {
            icon: (
                <HomeIcon
                    style={{ color: "#ff75a0" }}
                    onClick={() => {
                        router.push("/home");
                    }}
                />
            ),
            name: "Home",
        },
    ];

    const handleDirectionChange = (event) => {
        setDirection(event.target.value);
    };

    const handleHiddenChange = (event) => {
        setHidden(event.target.checked);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className={classes.root}>
            <div className={classes.exampleWrapper}>
                <SpeedDial
                    ariaLabel="SpeedDial example"
                    className={classes.speedDial}
                    hidden={hidden}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={() => {
                                handleClose();
                            }}
                        />
                    ))}
                </SpeedDial>
            </div>
        </div>
    );
};
