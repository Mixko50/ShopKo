import { Fragment } from "react";
import Nav from "../components/Layout/Nav";
import React from "react";
import Styled from "../styles/account/MyOrder";

const success = () => {
    return (
        <Fragment>
            <Nav />
            <section>
                <div className="success-page-max">
                    <div className="title-cart">
                        <h1>Order Successfully</h1>
                    </div>
                </div>
            </section>
            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default success;
