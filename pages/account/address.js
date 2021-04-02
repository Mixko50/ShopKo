import React, { Fragment, useContext, useRef } from "react";
import LayoutWithSideNav from "../../components/Layout/LayoutWithSideNav";
import AddressEdit from "../../components/forum/AddressEdit";
import Styles from "../../styles/account/address";
import { ProfileContext } from "../../context/profileContext";

const address = () => {
    const addressEditRef = useRef(null);
    const ProfileState = useContext(ProfileContext);
    const Profile = ProfileState.profile;

    console.log(Profile.address[0].house_number);

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
                <div className="setting-box">
                    <div className="address-setting">
                        <div>
                            <h4>Name :</h4>
                        </div>
                        <div>
                            {Profile.firstname} {Profile.lastname}
                        </div>
                        <div>
                            <h4>Phone number :</h4>
                        </div>
                        <div>{Profile.phone}</div>
                        <div>
                            <h4>Address :</h4>
                        </div>
                        <div>
                            <p className="address-detail">
                                {Profile.address[0].house_number}{" "}
                                {Profile.address[0].details}
                                <br />
                                {Profile.address[0].district}
                                <br />
                                {Profile.address[0].province}
                                <br />
                                {Profile.address[0].post}
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
                <div className="address-check">
                    <h2>Address not found!</h2>
                </div>
                <AddressEdit ref={addressEditRef} style={{ display: "none" }} />
            </LayoutWithSideNav>

            <style jsx>{Styles}</style>
        </Fragment>
    );
};

export default address;
