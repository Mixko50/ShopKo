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
import { ProfileContext } from "../../context/profileContext";

const ChangeEmail = (props, ref) => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");

    const { profile, setProfile } = useContext(ProfileContext);

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
                        onChange={(ev) => setEmail(ev.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            handleClose();
                            setProfile({ ...profile, email: email });
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
