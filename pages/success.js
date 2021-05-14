import { Fragment } from "react";
import Nav from "../components/Layout/Nav";
import React from "react";
import Styled from "../styles/account/MyOrder";
import { useLottie } from "lottie-react";
import LottieSuccess from "../public/img/order/success.json";
import Link from "next/link";

const LottieSuccessC = () => {
    const options = {
        animationData: LottieSuccess,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return View;
};

const success = () => {
    return (
        <Fragment>
            <Nav />
            <section>
                <div className="success-page-max">
                    <div className="title-cart">
                        <h1>Order Successfully</h1>
                    </div>
                    <div className="title-cart" style={{ height: "0" }}>
                        <h2>Thank you!</h2>
                    </div>
                    <div className="lottie-box">
                        <div className="lottie">
                            <LottieSuccessC />
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default success;
