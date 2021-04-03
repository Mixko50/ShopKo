import React, { Fragment } from "react";
import NavLogin from "./NavLogin";
import Styled from "../../styles/Layout/LoginLayout";
import { useLottie } from "lottie-react";
import LoginAnimatioon from "../../public/img/login/login.json";

const LottieLogin = () => {
    const options = {
        animationData: LoginAnimatioon,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return View;
};

const LoginLayout = (props) => {
    return (
        <Fragment>
            <NavLogin />
            <div className="page">
                <div className="left-side">
                    <LottieLogin style={{ width: "700px", height: "700px" }} />
                </div>
                <div className="right-side">{props.children}</div>
            </div>
            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default LoginLayout;
