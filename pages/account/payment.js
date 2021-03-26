import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useRef } from "react";
import LayoutWithSideNav from "../../components/Layout/LayoutWithSideNav";
import Styled from "../../styles/account/Payment";
import AlertDialog from "../../components/forum/AlertDialog";

const payment = () => {
    // const ref = useRef(null);
    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>Payment Setting</h1>
                </div>
                <div className="add-button-box">
                    <a href="#">
                        <div className="add-button" onClick={() => {}}>
                            + Add
                        </div>
                    </a>
                </div>
                <div className="payment-setting-box">
                    <div className="payment-setting">
                        <div className="payment-img">
                            <FontAwesomeIcon
                                icon={faCreditCard}
                                color="red"
                                size="3x"
                            />
                        </div>
                        <div className="payment-card-type">
                            <h3>Master Card</h3>
                        </div>
                        <div className="payment-card-number">
                            <h4>**** **** **** 2434</h4>
                        </div>
                        <div className="delete-payment">
                            <a href="#">
                                <h4>Delete</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </LayoutWithSideNav>
            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default payment;
