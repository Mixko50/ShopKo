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
                                    <div className="product-title">
                                        <h3>Coming soon!</h3>
                                    </div>
                                    <div className="product-quantity">
                                        <h4>quantity : 3</h4>
                                    </div>
                                    <div className="product-quantity">
                                        <h4>Price/Each : 1</h4>
                                    </div>
                                </div>
                                <div className="order-price">
                                    <h1>$100</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutWithSideNav>
            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default myorder;
