import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useRef, useEffect, useState } from "react";
import LayoutWithSideNav from "../../components/Layout/LayoutWithSideNav";
import Styled from "../../styles/account/Payment";
import { AddCardDialog } from "../../components/forum/AddCardDialog";
import axios from "../../utils/axios";
import address from "./address";

const payment = () => {
    const ref = useRef(null);
    const [payment, setPayment] = useState({});

    useEffect(() => {
        const paymentAx = async () => {
            try {
                const paymentInformation = await axios.post(`/setting/payment`);
                setPayment(paymentInformation.data);
            } catch (error) {
                console.log("Error");
            }
        };
        paymentAx();
    }, []);

    const deleteCard = (id) => {
        axios.post("/setting/payment/delete", {
            id: id,
        });
    };

    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>Payment Setting</h1>
                </div>
                <div className="add-button-box">
                    <a href="#">
                        <div
                            className="add-button"
                            onClick={() => {
                                ref.current.open();
                            }}
                        >
                            + Add
                        </div>
                    </a>
                </div>
                {payment.payment ? (
                    <>
                        {payment.information.map((el) => (
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
                                        <h3>{el.type}</h3>
                                    </div>
                                    <div className="payment-card-number">
                                        <h4>{el.card_number}</h4>
                                    </div>
                                    <div className="delete-payment">
                                        <a
                                            href="#"
                                            onClick={() => {
                                                deleteCard(el.id);
                                            }}
                                        >
                                            <h4>Delete</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <div className="payment-check">
                        <h2>Payment not found!</h2>
                    </div>
                )}

                <AddCardDialog ref={ref} style={{ display: "none" }} />
            </LayoutWithSideNav>
            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default payment;
