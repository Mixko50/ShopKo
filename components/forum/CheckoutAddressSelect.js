import Styled from "../../styles/account/MyOrder";
import axios from "../../utils/axios";
import Radio from "@material-ui/core/Radio";
import { forwardRef } from "react";
import { Fragment } from "react";
import React, { useState, useEffect, useImperativeHandle } from "react";
import { Link } from "@material-ui/core";

export const CheckoutAddressSelect = forwardRef((props, ref) => {
    const [address, setAddress] = useState({});

    useEffect(() => {
        fetchedData();
    }, []);

    const fetchedData = async () => {
        try {
            const addressAx = await axios.post(`/setting/address`);
            setAddress(addressAx.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [selectedAddress, setSelectedAddress] = React.useState(0);

    const handleChangeAddress = (event) => {
        setSelectedAddress(event.target.value);
    };

    useImperativeHandle(ref, () => ({
        getAddressId: () => {
            return selectedAddress;
        },
    }));

    return (
        <Fragment>
            <div className="address-box-controller">
                <div className="address-box">
                    <div className="address-title">
                        <h3>Choose the address for delivery</h3>
                    </div>
                    {address.address ? (
                        address.information.map((item) => (
                            <div className="address-select-box">
                                <div className="address-radio-box">
                                    <Radio
                                        checked={selectedAddress == item.id}
                                        onChange={handleChangeAddress}
                                        value={item.id}
                                    />
                                </div>
                                <div className="address">
                                    <h4
                                        style={{ margin: "5px 0" }}
                                    >{`${item.name}   ${item.phone}`}</h4>
                                    <p>{`${item.house_number}  ${item.details}  
                                              ${item.sub_district}  ${item.district}  ${item.province}  
                                              ${item.post}`}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ marginTop: "20px" }}>
                            <Link href="/account/address">Add address</Link>
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{Styled}</style>
        </Fragment>
    );
});
