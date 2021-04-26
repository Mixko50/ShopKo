import React, {
    forwardRef,
    useContext,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "../../utils/axios";

const ChangePhoneNumber = (props, ref) => {
    const [open, setOpen] = React.useState(false);
    const [phone, setPhone] = React.useState("");
    const [confirmPhone, setConfirmPhone] = useState(true);

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

    const updatePhone = () => {
        axios.post("/setting/profile/phone", {
            phone: phone,
        });
        window.location.href = "/account/profile";
    };

    const phoneNumberCheck = () => {
        const phonePattern = /(\d{3})-(\d{3})-(\d{4})|(\d{10})/;
        if (phonePattern.test(phone) == true) {
            setConfirmPhone(true);
            return true;
        } else {
            setConfirmPhone(false);
            return false;
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
                fullWidth="true"
                maxWidth="xs"
            >
                <DialogTitle id="form-dialog-title">
                    Change your Phone Number
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Type your new Phone number here
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="New Phone Number"
                        type="text"
                        fullWidth
                        onChange={(ev) => {
                            setPhone(ev.target.value);
                        }}
                    />
                    {confirmPhone ? null : (
                        <div style={{ color: "red" }}>Not Correct</div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            if (phoneNumberCheck()) {
                                updatePhone();
                                handleClose();
                            }
                        }}
                        color="primary"
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default forwardRef(ChangePhoneNumber);
