import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { Router, useRouter } from "next/router";

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
                        router.push("/account/myorder");
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
                        router.push("/cart");
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
                        router.push("/account/profile");
                    }}
                />
            ),
            name: "Profile",
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
