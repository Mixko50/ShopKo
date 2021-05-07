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
            await axios.post(
                `/checkout/one/confirm`,
                qs.stringify({
                    addressId: checkoutAddressSelect.current.getAddressId(),
                    paymentId: checkoutPaymentSelect.current.getPaymentId(),
                    discount: 0,
                    productId: router.query.id,
                    quantity: router.query.quantity,
                    price: product.price * router.query.quantity,
                })
            );
            console.log("Successfully");
        } catch (error) {
            console.log(error);
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
                                                $
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
                                <h1>Total</h1>
                            </div>
                            <div className="button-box">
                                <div className="buy-price">
                                    <h1>
                                        ${product.price * router.query.quantity}
                                    </h1>
                                </div>
                                <Link
                                    href="/checkout"
                                    style={{
                                        color: "black",
                                        textDecorationLine: "none",
                                    }}
                                >
                                    <a>
                                        <div
                                            className="buy-button"
                                            onClick={confirmOrder}
                                        >
                                            Checkout
                                        </div>
                                    </a>
                                </Link>
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
