import React, { Fragment, useRef } from "react";
import LayoutWithSideNav from "../../components/Layout/LayoutWithSideNav";
import AddressEdit from "../../components/forum/AddressEdit";
import Styles from "../../styles/account/address";

const address = () => {
    const addressEditRef = useRef(null);

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
                        <div>Name :</div>
                        <div>Apisit Maneerat</div>
                        <div>Address :</div>
                        <div>
                            <p className="address-detail">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                        </div>
                        <div>Phone number :</div>
                        <div>083-XXX-XXXX</div>
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
                <div className="setting-box">
                    <div className="address-setting">
                        <div>Name :</div>
                        <div>Itsuki Nakano</div>
                        <div>Address :</div>
                        <div>
                            <p className="address-detail">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                        </div>
                        <div>Phone number :</div>
                        <div>s</div>
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
