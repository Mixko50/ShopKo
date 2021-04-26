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

const ChangeEmail = (props, ref) => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [boxCheckEmail, setBoxCheckEmail] = useState(true);

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

    const updateEmail = () => {
        axios.post("/setting/profile/email", {
            email: email,
        });
    };

    const emailCheck = () => {
        const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailPattern.test(email) == true) {
            setBoxCheckEmail(true);
            window.location.href = "/account/profile";
            return true;
        } else {
            setBoxCheckEmail(false);
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
                maxWidth="sm"
                fullWidth="true"
            >
                <DialogTitle id="form-dialog-title">
                    Change your email
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Type your new email here.
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="New Email Address"
                        type="email"
                        onChange={(ev) => {
                            setEmail(ev.target.value);
                        }}
                        fullWidth
                    />
                    {!boxCheckEmail == true ? (
                        <div style={{ color: "red" }}>Not Correct</div>
                    ) : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            if (emailCheck()) {
                                updateEmail();
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

export default forwardRef(ChangeEmail);
