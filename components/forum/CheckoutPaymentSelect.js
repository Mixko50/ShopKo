import Styled from "../../styles/account/MyOrder";
import axios from "../../utils/axios";
import Radio from "@material-ui/core/Radio";
import { forwardRef, useImperativeHandle } from "react";
import { Fragment } from "react";
import React, { useState, useEffect } from "react";

export const CheckoutPaymentSelect = forwardRef((props, ref) => {
    const [payment, setPayment] = useState({});

    useEffect(() => {
        fetchedData();
    }, []);

    const fetchedData = async () => {
        try {
            const paymentAx = await axios.post(`/setting/payment`);
            setPayment(paymentAx.data);
        } catch (error) {
            console.log(error);
        }
    };
    const [selectedPayment, setSelectedPayment] = React.useState(0);

    const handleChangePayment = (event) => {
        setSelectedPayment(event.target.value);
    };

    useImperativeHandle(ref, () => ({
        getPaymentId: () => {
            return selectedPayment;
        },
    }));

    return (
        <Fragment>
            <div className="address-box-controller">
                <div className="payment-box">
                    <div className="address-title">
                        <h3>Choose the payment for pay</h3>
                    </div>
                    {payment.payment ? (
                        payment.information.map((item) => (
                            <div className="address-select-box">
                                <div className="address-radio-box">
                                    <Radio
                                        checked={selectedPayment == item.id}
                                        onChange={handleChangePayment}
                                        value={item.id}
                                    />
                                </div>
                                <div className="address">
                                    <h4 style={{ margin: "5px 0" }}>
                                        {item.type}
                                        {"   "}
                                        ****
                                        {"   "}
                                        {item.card_number.substring(12)}
                                    </h4>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>ADD PLEASE</div>
                    )}
                    <div className="address-select-box">
                        <div className="address-radio-box">
                            <Radio
                                checked={selectedPayment == -1}
                                onChange={handleChangePayment}
                                value={-1}
                            />
                        </div>
                        <div className="address">
                            <h4>Cash</h4>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{Styled}</style>
        </Fragment>
    );
});
