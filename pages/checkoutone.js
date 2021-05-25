import React, { useState, useEffect, useRef } from "react";
import { Fragment } from "react";
import Nav from "../components/Layout/Nav";
import Styled from "../styles/account/MyOrder";
import { SpeedDials } from "../components/forum/SpeedDial";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "../utils/axios";
import { CheckoutAddressSelect } from "../components/forum/CheckoutAddressSelect";
import { CheckoutPaymentSelect } from "../components/forum/CheckoutPaymentSelect";
import qs from "qs";

const checkoutone = () => {
    const router = useRouter();
    console.log(router.query.id);

    const [product, setProduct] = useState({});

    const checkoutAddressSelect = useRef(null);
    const checkoutPaymentSelect = useRef(null);
    const [shippingData, setShippingData] = useState({});
    const [discount, setDiscount] = useState(0);
    const [shippingFee, setShippingFee] = useState(50);
    const [shippingCodeInput, setShippingCodeInput] = useState("");

    useEffect(() => {
        fetchedData();
    }, []);

    const fetchedData = async () => {
        const product = await axios.get(
            `checkout/one/product?id=${router.query.id}`
        );
        setProduct(product.data);
    };

    const confirmOrder = async () => {
        try {
            if (
                checkoutAddressSelect.current.getAddressId() != 0 &&
                checkoutPaymentSelect.current.getPaymentId() != 0
            ) {
                await axios.post(
                    `/checkout/one/confirm`,
                    qs.stringify({
                        addressId: checkoutAddressSelect.current.getAddressId(),
                        paymentId: checkoutPaymentSelect.current.getPaymentId(),
                        discount: discount,
                        productId: router.query.id,
                        quantity: router.query.quantity,
                        price: product.price * router.query.quantity,
                    })
                );
                if (discount == 1) {
                    await axios.post(
                        `/shippingcode/update`,
                        qs.stringify({
                            shippingCode: shippingCodeInput,
                        })
                    );
                }
                router.push("/success");
            } else {
                console.log("need more information");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const shippingCodeCheck = async () => {
        try {
            const shippingCodeCheckAx = await axios.get(
                `/shippingcode/check?shippingCode=${shippingCodeInput}`
            );
            setShippingData(shippingCodeCheckAx.data);
            if (shippingCodeCheckAx.data.isFound) {
                setShippingFee(0);
                setDiscount(1);
            } else {
                setShippingFee(50);
                setDiscount(0);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Fragment>
            <Nav />
            <section>
                <div className="cart-page-max">
                    <div className="title-cart">
                        <h1>Checkout</h1>
                    </div>
                    <div
                        className="order-box-controller"
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div className="order-bigbox">
                            <div className="order-box">
                                <div className="order">
                                    <div className="suborder-box">
                                        <div className="order-pic-box">
                                            <div
                                                className="order-pic"
                                                style={{
                                                    backgroundImage: `url(${product.image})`,
                                                }}
                                            ></div>
                                        </div>
                                        <div className="order-details">
                                            <div className="product-title">
                                                <h4>{product.title}</h4>
                                            </div>
                                            <div className="product-quantity">
                                                <h4>
                                                    quantity :{" "}
                                                    {router.query.quantity}
                                                </h4>
                                            </div>
                                            <div className="product-quantity">
                                                <h4>
                                                    Price/Each : {product.price}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="order-price">
                                            <h1>
                                                ฿
                                                {product.price *
                                                    router.query.quantity}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CheckoutAddressSelect ref={checkoutAddressSelect} />
                    <CheckoutPaymentSelect ref={checkoutPaymentSelect} />
                    <div className="buy-box-controller">
                        <div className="buy-box">
                            <div className="buy-title">
                                <h1>Shipping fee</h1>
                            </div>
                            <div className="button-box">
                                <div className="buy-price">
                                    <h1>${shippingFee}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buy-box-controller">
                        <div className="buy-box">
                            <div className="buy-title">
                                <h1>Shipping code</h1>
                            </div>
                            <div className="button-box">
                                <div className="buy-price">
                                    <input
                                        placeholder="type your code"
                                        onChange={(ev) =>
                                            setShippingCodeInput(
                                                ev.target.value
                                            )
                                        }
                                    />
                                </div>
                                <div
                                    className="buy-button"
                                    onClick={shippingCodeCheck}
                                >
                                    Check
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buy-box-controller">
                        <div className="buy-box">
                            <div className="buy-title">
                                <h1>Total</h1>
                            </div>
                            <div className="button-box">
                                <div className="buy-price">
                                    <h1>
                                        ฿{product.price} + {shippingFee} = ฿
                                        {product.price + shippingFee}
                                    </h1>
                                </div>
                                <div
                                    className="buy-button"
                                    onClick={confirmOrder}
                                >
                                    Confirm
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SpeedDials />
            </section>

            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default checkoutone;
