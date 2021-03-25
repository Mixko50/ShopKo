import React from "react";
import { Fragment } from "react";
import Nav from "../components/Layout/Nav";
import Styled from "../styles/account/MyOrder";

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
                                <div className="order-number">
                                    <p>
                                        Order:{" "}
                                        <span>
                                            <a href="#">325235666</a>
                                        </span>
                                    </p>
                                    <p>
                                        <span style={{ color: "green" }}>
                                            Complete
                                        </span>
                                    </p>
                                </div>
                                <div className="order">
                                    <div className="suborder-box">
                                        <div className="order-pic-box">
                                            <div className="order-pic"></div>
                                        </div>
                                        <div className="order-details">
                                            <h1>Coming soon!</h1>
                                        </div>
                                        <div className="order-price">
                                            <h1>$100</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="total">
                                    <h2>Total</h2>
                                    <h2>$100</h2>
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
            </section>

            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default cart;
