import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import data from '../../utils/provinces';
import AddressSelect from './AddressSelect';

export default forwardRef((props, ref) => {
    const [open, setOpen] = React.useState(false);
    const [province, setProvince] = useState('Bangkok');
    const [district, setDistrict] = useState('');
    const [subDistrict, setSubDistrict] = useState('');

    const [districts, setDistricts] = useState('');
    const [subDistricts, setSubDistricts] = useState('');
    const provinces = [...new Set(data.map((el) => el.province))]

    useEffect(() => {
        let tempDistricts = [... new Set((data.filter((el) => el.province == province)).map((el) => el.district))]
        setDistricts(tempDistricts);
        setDistrict('')
    }, [province])

    useEffect(() => {
        let tempSubDistricts = [... new Set((data.filter((el) => el.district == district)).map((el) => el.subDistrict))]
        setSubDistricts(tempSubDistricts);
        setSubDistrict('')
    }, [province, district])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useImperativeHandle(ref, () => ({
        open() {
            handleClickOpen()
        }

    }));
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit Address</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Phone number"
                        type="text"
                        fullWidth
                    />
                    <AddressSelect title='Province' data={provinces} current={province} setCurrent={(el) => setProvince(el)} margin="normal" />
                    <AddressSelect title='District' data={districts} current={district} setCurrent={(el) => setDistrict(el)} />
                    <AddressSelect title='Subdistrict' data={subDistricts} current={subDistrict} setCurrent={(el) => setSubDistrict(el)} margin="normal" />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Details"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions style={{ margin: '20px 0px' }}>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Subscribe
          </Button>
                </DialogActions>
            </Dialog>
            <style jsx>{`
                
                .MuiPaper-rounded {
                    border-radius: 20px !important;
                }

                ` }</style>
        </div>
    );
})