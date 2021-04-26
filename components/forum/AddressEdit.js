import React, {
    forwardRef,
    useImperativeHandle,
    useState,
    useEffect,
} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import data from "../../utils/provinces";
import AddressSelect from "./AddressSelect";
import axios from "../../utils/axios";

export default forwardRef((props, ref) => {
    const [address, setAddress] = useState({});
    const [newAddress, setnewAddress] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [subDistrict, setSubDistrict] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const [districts, setDistricts] = useState("");
    const [subDistricts, setSubDistricts] = useState("");
    const [postalCodes, setPostalCodes] = useState("");

    const provinces = [...new Set(data.map((el) => el.province))];

    useEffect(() => {
        let tempDistricts = [
            ...new Set(
                data
                    .filter((el) => el.province == province)
                    .map((el) => el.district)
            ),
        ];
        setDistricts(tempDistricts);
        setDistrict("");
    }, [province]);

    useEffect(() => {
        let tempSubDistricts = [
            ...new Set(
                data
                    .filter((el) => el.district == district)
                    .map((el) => el.subDistrict)
            ),
        ];
        setSubDistricts(tempSubDistricts);
        setSubDistrict("");
    }, [province, district]);

    useEffect(() => {
        let tempPostalCodes = [
            ...new Set(
                data
                    .filter((el) => el.subDistrict == subDistrict)
                    .map((el) => el.Zipcode)
            ),
        ];
        setPostalCodes(tempPostalCodes);
        setPostalCode("");
    }, [province, district, subDistrict]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useImperativeHandle(ref, () => ({
        open(el) {
            const work = () => {
                setAddress(el);
                if (!el) {
                    setAddress({
                        name: "",
                        phone: "",
                        province: "",
                        district: "",
                        sub_district: "",
                        post: "",
                        house_number: "",
                        details: "",
                        id: 0,
                    });
                    setnewAddress(true);
                }
            };
            work();
            handleClickOpen();
        },
    }));

    const addressUpdate = () => {
        try {
            if (
                province &&
                district &&
                subDistrict &&
                postalCode &&
                !newAddress
            ) {
                axios.post("/setting/address/update", {
                    name: address.name,
                    phone: address.phone,
                    province: province,
                    district: district,
                    sub_district: subDistrict,
                    post: postalCode,
                    house_number: address.house_number,
                    details: address.details,
                    id: address.id,
                });
                console.log("Success");
            } else if (
                province &&
                district &&
                subDistrict &&
                postalCode &&
                newAddress
            ) {
                axios.post("/setting/address/add", {
                    name: address.name,
                    phone: address.phone,
                    province: province,
                    district: district,
                    sub_district: subDistrict,
                    post: postalCode,
                    house_number: address.house_number,
                    details: address.details,
                    id: address.id,
                });
                console.log("new Address added");
            }
        } catch (error) {
            console.log("Error");
        }
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
            >
                <DialogTitle id="form-dialog-title">Address</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To change address in this website, please enter your
                        address here. We will send updates occasionally (maybe).
                    </DialogContentText>
                    <TextField
                        margin="normal"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        placeholder={address.name}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(ev) =>
                            setAddress({
                                ...address,
                                name: ev.target.value,
                            })
                        }
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Phone number"
                        type="text"
                        fullWidth
                        placeholder={address.phone}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(ev) =>
                            setAddress({
                                ...address,
                                phone: ev.target.value,
                            })
                        }
                    />
                    <AddressSelect
                        title="Province"
                        data={provinces}
                        current={province}
                        setCurrent={(el) => setProvince(el)}
                        margin="normal"
                    />
                    <AddressSelect
                        title="District"
                        data={districts}
                        current={district}
                        setCurrent={(el) => setDistrict(el)}
                    />
                    <AddressSelect
                        title="Subdistrict"
                        data={subDistricts}
                        current={subDistrict}
                        setCurrent={(el) => setSubDistrict(el)}
                        margin="normal"
                    />
                    <AddressSelect
                        title="Post"
                        data={postalCodes}
                        current={postalCode}
                        setCurrent={(el) => setPostalCode(el)}
                        margin="normal"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="House number"
                        type="text"
                        fullWidth
                        placeholder={address.house_number}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(ev) =>
                            setAddress({
                                ...address,
                                house_number: ev.target.value,
                            })
                        }
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Details"
                        type="text"
                        fullWidth
                        placeholder={address.details}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(ev) =>
                            setAddress({
                                ...address,
                                details: ev.target.value,
                            })
                        }
                    />
                </DialogContent>
                <DialogActions style={{ margin: "20px 0px" }}>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            if (
                                address.name &&
                                address.house_number &&
                                province &&
                                district &&
                                subDistrict &&
                                postalCode
                            ) {
                                addressUpdate();
                                window.location.href = "/account/address";
                                handleClose();
                            }
                        }}
                        color="primary"
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <style jsx>{`
                .MuiPaper-rounded {
                    border-radius: 20px !important;
                }
            `}</style>
        </div>
    );
});
