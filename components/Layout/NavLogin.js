import { Link } from "@material-ui/core";
import React, { Fragment } from "react";
import Styled from "../../styles/Layout/NavLogin";

const NavLogin = () => {
    return (
        <Fragment>
            <div className="nav-login">
                <div className="logo">
                    <a href="/home">
                        <img src="/logo.svg"></img>
                    </a>
                    <a href="/home">
                        <h1>ShopKo</h1>
                    </a>
                </div>
            </div>
            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default NavLogin;
