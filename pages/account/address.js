import React, { Fragment, useRef, useState, useEffect } from "react";
import LayoutWithSideNav from "../../components/Layout/LayoutWithSideNav";
import AddressEdit from "../../components/forum/AddressEdit";
import Styles from "../../styles/account/Address";
import axios from "../../utils/axios";

const address = () => {
    const addressEditRef = useRef(null);
    const [address, setAddress] = useState({});

    useEffect(() => {
        const addressUser = async () => {
            try {
                console.log("Heelo ");
                const addressAx = await axios.post(`/account/address`);
                console.log(addressAx.data);
                setAddress(addressAx.data);
            } catch (error) {
                console.log("Error");
            }
        };
        addressUser();
    }, []);

    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>Address Setting</h1>
                </div>
                <div
                    className="add-button-box"
                    onClick={() => {
                        addressEditRef.current.open();
                    }}
                >
                    <a href="#">
                        <div className="add-button">+ Add</div>
                    </a>
                </div>
                {address.address ? (
                    <>
                        <div className="setting-box">
                            <div className="address-setting">
                                <div>
                                    <h4>Name :</h4>
                                </div>
                                <div>{address.name}</div>
                                <div>
                                    <h4>Phone number :</h4>
                                </div>
                                <div>{address.phone}</div>
                                <div>
                                    <h4>Address :</h4>
                                </div>
                                <div>
                                    <p className="address-detail">
                                        {address.house_number} {address.details}
                                        <br />
                                        {address.district}
                                        <br />
                                        {address.province}
                                        <br />
                                        {address.post}
                                    </p>
                                </div>
                            </div>
                            <div className="address-edit">
                                <a
                                    href="#"
                                    onClick={() => {
                                        addressEditRef.current.open();
                                    }}
                                >
                                    <h3>Edit</h3>
                                </a>
                                <a href="#">
                                    <h3>Delete</h3>
                                </a>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="address-check">
                        <h2>Address not found!</h2>
                    </div>
                )}
                <AddressEdit ref={addressEditRef} style={{ display: "none" }} />
            </LayoutWithSideNav>

            <style jsx>{Styles}</style>
        </Fragment>
    );
};

export default address;
