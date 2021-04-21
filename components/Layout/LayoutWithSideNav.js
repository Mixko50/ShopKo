import {
    faAddressCard,
    faLock,
    faMapMarkerAlt,
    faMoneyCheckAlt,
    faShoppingCart,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useContext } from "react";
import LayoutWithNav from "./LayoutWithNav";
import Link from "next/link";
import { ProfileContext } from "../../context/profileContext";
import Styled from "../../styles/Layout/LayoutWithSideNav";
import { SpeedDials } from "../forum/SpeedDial";

const LayoutWithSideNav = (props) => {
    const profileState = useContext(ProfileContext);
    const profile = profileState.profile;

    return (
        <Fragment>
            <LayoutWithNav>
                <section>
                    <div className="max-width-box">
                        <div className="sidebar">
                            <div className="pic-name">
                                <div className="profile-pic-box">
                                    <div
                                        className="profile-pic"
                                        style={{
                                            backgroundImage: `url(${profile.profilepic})`,
                                        }}
                                    ></div>
                                    {/* <FontAwesomeIcon icon={faUserCircle} size="8x" /> */}
                                </div>
                                <h1>
                                    {profile.firstname} {profile.lastname}
                                </h1>
                            </div>
                            <div className="menu-setting">
                                <div className="menu-icon">
                                    <Link href="/account/profile" passHref>
                                        <a>
                                            <FontAwesomeIcon
                                                icon={faAddressCard}
                                                size="2x"
                                                color="#ff75a0"
                                            />
                                        </a>
                                    </Link>
                                    <Link href="/account/address">
                                        <a>
                                            <FontAwesomeIcon
                                                icon={faMapMarkerAlt}
                                                size="2x"
                                                color="#ff75a0"
                                            />
                                        </a>
                                    </Link>
                                    <Link href="/account/payment">
                                        <a>
                                            <FontAwesomeIcon
                                                icon={faMoneyCheckAlt}
                                                size="2x"
                                                color="#ff75a0"
                                            />
                                        </a>
                                    </Link>
                                    <Link href="/account/changepass">
                                        <a>
                                            <FontAwesomeIcon
                                                icon={faLock}
                                                size="2x"
                                                color="#ff75a0"
                                            />
                                        </a>
                                    </Link>
                                    <Link href="/account/myorder">
                                        <a>
                                            <FontAwesomeIcon
                                                icon={faShoppingCart}
                                                size="2x"
                                                color="#ff75a0"
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className="menu-bar">
                                    <Link href="/account/profile">
                                        <p>Profile</p>
                                    </Link>
                                    <Link href="/account/address">
                                        <p>Address</p>
                                    </Link>
                                    <Link href="/account/payment">
                                        <p>Payment</p>
                                    </Link>
                                    <Link href="/account/changepass">
                                        <p>Change Password</p>
                                    </Link>
                                    <Link href="/account/myorder">
                                        <p>My Order</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="content">{props.children}</div>
                    </div>
                </section>
                <SpeedDials />
            </LayoutWithNav>

            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default LayoutWithSideNav;
