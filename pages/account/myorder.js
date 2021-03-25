import React, { Fragment } from "react";
import LayoutWithSideNav from "../../components/Layout/LayoutWithSideNav";
import Styled from "../../styles/account/MyOrder";

const myorder = () => {
    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>My Order</h1>
                </div>
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
                                <span style={{ color: "green" }}>Complete</span>
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
            </LayoutWithSideNav>
            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default myorder;
