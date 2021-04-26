import React, { forwardRef, useImperativeHandle, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "../../utils/axios";

export const AddCardDialog = forwardRef((props, ref) => {
    const [open, setOpen] = React.useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [expiredDate, setExpiredDate] = useState("");
    const [type, setType] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useImperativeHandle(ref, () => ({
        open() {
            handleClickOpen();
        },
    }));

    const addCard = () => {
        try {
            axios.post("/setting/payment/add", {
                cardNumber: cardNumber,
                name: name,
                month: expiredDate.substring(0, 2),
                year: expiredDate.substring(3),
                type: type,
            });
            window.location.href = "/account/payment";
        } catch (error) {
            console.log("Error");
        }
    };

    return (
        <div style={props.style}>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Open form dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Add payment</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To add your payment , please enter number of card, cvc
                        and expired date here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Card number"
                        type="text"
                        fullWidth
                        onChange={(ev) => setCardNumber(ev.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        onChange={(ev) => setName(ev.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Expired date"
                        type="text"
                        placeholder="00/00"
                        onChange={(ev) => setExpiredDate(ev.target.value)}
                    />
                    <br />
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Type of Card"
                        type="text"
                        onChange={(ev) => setType(ev.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            addCard();
                            handleClose();
                        }}
                        color="primary"
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});
