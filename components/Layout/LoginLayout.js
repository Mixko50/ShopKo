import React, { Fragment } from "react";
import NavLogin from "./NavLogin";
import Styled from "../../styles/Layout/LoginLayout";

const LoginLayout = (props) => {
    return (
        <Fragment>
            <NavLogin />
            <div className="page">
                <div className="left-side"></div>
                <div className="right-side">{props.children}</div>
            </div>
            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default LoginLayout;
