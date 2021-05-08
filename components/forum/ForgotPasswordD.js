import React, {
    useImperativeHandle,
    useRef,
    forwardRef,
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

export default forwardRef((props, ref) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setConfirm(0);
        setOpen(false);
    };
    const [check, setCheck] = useState({});
    const [email, setEmail] = useState("");
    const [confirm, setConfirm] = useState(0);

    useImperativeHandle(ref, () => ({
        open() {
            handleClickOpen();
        },
    }));

    const resetPassword = async () => {
        try {
            const emailAx = await axios.post(`/setting/resetPassword`, {
                email: email,
            });
            if (emailAx.data.email) {
                setConfirm(1);
            }
            setCheck(emailAx.data);
        } catch (err) {
            setConfirm(2);
            console.log(err);
        }
    };
    return (
        <div style={{ display: "none" }}>
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
                fullWidth
                maxWidth="xs"
            >
                <DialogTitle id="form-dialog-title">
                    Forgot Password?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Type your email to reset your password.
                    </DialogContentText>
                    {confirm == 0 ? (
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    ) : (
                        <div style={{ color: "green" }}>
                            Please check your email to reset your password.
                        </div>
                    )}
                    {confirm == 2 ? (
                        <div style={{ color: "red" }}>Email not correct.</div>
                    ) : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={resetPassword} color="primary">
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});
