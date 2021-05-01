import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Nav from "../components/Layout/Nav";
import Styled from "../styles/account/MyOrder";
import { SpeedDials } from "../components/forum/SpeedDial";
import axios from "../utils/axios";

const cart = () => {
    return (
        <Fragment>
            <Nav />

            <section>
                <div className="cart-page-max">
                    <div className="title-cart">
                        <h1>Cart</h1>
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
                                <div
                                    className="order-number"
                                    style={{ justifyContent: "flex-end" }}
                                >
                                    <div className="delete-button">
                                        <p style={{ color: "white" }}>Delete</p>
                                    </div>
                                </div>
                                <div className="order">
                                    <div className="suborder-box">
                                        <div className="order-pic-box">
                                            <div className="order-pic"></div>
                                        </div>
                                        <div className="order-details">
                                            <div className="product-title">
                                                <h2>Coming soon!</h2>
                                            </div>
                                            <div className="product-quantity">
                                                <h3>quantity : 3</h3>
                                            </div>
                                        </div>
                                        <div className="order-price">
                                            <h1>$100</h1>
                                        </div>
                                    </div>
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
                                    <h1>$100</h1>
                                </div>
                                <div className="buy-button">Confirm</div>
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

export default cart;
