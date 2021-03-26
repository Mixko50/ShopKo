import { Fragment, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faShoppingCart,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../forum/Dropdown";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { ProfileContext } from "../../context/profileContext";
import Styled from "../../styles/Layout/Nav";

const Nav = () => {
    const profileContext = useContext(ProfileContext);
    const profile = profileContext.profile;

    return (
        <Fragment>
            <nav>
                <div className="nav-box">
                    <div className="logo">
                        <Link href="/home">
                            <img src="/logo.svg"></img>
                        </Link>
                        <Link href="/home">
                            <h1>ShopKo</h1>
                        </Link>
                    </div>
                    <div className="search">
                        <input placeholder="Search"></input>
                        <a href="#">
                            <FontAwesomeIcon icon={faSearch} color="#ea5e76" />
                        </a>
                    </div>
                    <div className="status">
                        <div>
                            <Badge
                                style={{ margin: "0px 25px " }}
                                badgeContent={1}
                                color="secondary"
                            >
                                <Link href="/cart">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        style={{
                                            cursor: "pointer",
                                            width: "25px",
                                            height: "25px",
                                        }}
                                    />
                                </Link>
                            </Badge>
                        </div>
                        <p>
                            <Link href="/">Login</Link> /{" "}
                            <Link href="#">SignUp</Link>
                        </p>
                        <Link href="/account/profile">
                            <div
                                className="profile-pic"
                                style={{
                                    backgroundImage: `url(${profile.profilepic})`,
                                }}
                            ></div>
                        </Link>
                        {/* <Link href="/"><FontAwesomeIcon icon={faUserCircle} color="black" size="2x" /></Link> */}
                        <Dropdown />
                    </div>
                </div>
            </nav>
            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default Nav;
