import React, { Fragment, useContext, useRef, useState } from "react";
import LayoutWithSideNav from "../../components/Layout/LayoutWithSideNav";
import GenderSelect from "../../components/forum/GenderSelect";
import BirthdaySelect from "../../components/forum/BirthdaySelect";
import { ProfileContext } from "../../context/profileContext";
import Styled from "../../styles/account/Profile";
import ChangeEmail from "../../components/forum/ChangeEmail";
import ChangePhoneNumber from "../../components/forum/ChangePhoneNumber";

const profile = () => {
    const profileState = useContext(ProfileContext);
    const profileC = profileState.profile;

    let fname = "";
    let lname = "";
    let pass = "";

    const { profile, setProfile } = useContext(ProfileContext);

    const changeEmailRef = useRef(null);
    const changePhoneNumber = useRef(null);

    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>Profile Setting</h1>
                </div>

                <div className="profile-setting">
                    <div>Firstname - Lastname : </div>
                    <div>
                        <input
                            placeholder={profile.firstname}
                            onChange={(ev) => (fname = ev.target.value)}
                        ></input>
                        <input
                            placeholder={profile.lastname}
                            onChange={(ev) => (lname = ev.target.value)}
                        ></input>
                    </div>
                    <div>Username : </div>
                    <div>{profileC.username}</div>
                    <div>Email : </div>
                    <div className="edit">
                        <p>{profileC.email}</p>
                        <a href="#">
                            <div
                                className="edit-button"
                                onClick={() => {
                                    changeEmailRef.current.open();
                                }}
                            >
                                Edit
                            </div>
                        </a>
                    </div>
                    <div>Phone number :</div>
                    <div className="edit">
                        <p>{profileC.phone}</p>
                        <a href="#">
                            <div
                                className="edit-button"
                                onClick={() => {
                                    changePhoneNumber.current.open();
                                }}
                            >
                                Edit
                            </div>
                        </a>
                    </div>
                    <div>Gender :</div>
                    <div>
                        <GenderSelect />
                    </div>
                    <div>Birthday : </div>
                    <div className="edit">
                        <BirthdaySelect />
                    </div>
                </div>
                <div className="confirm-password">
                    <h3>Confirm Password</h3>
                    <input
                        type="password"
                        onChange={(ev) => (pass = ev.target.value)}
                    ></input>
                </div>
                <div className="confirm-cancel-button">
                    <a href="#">
                        <div
                            className="confirm-button"
                            onClick={() => {
                                console.log(pass);
                                console.log(fname);
                                if (pass == profile.password) {
                                    if (fname == "" && lname == "") {
                                    } else if (fname == "") {
                                        setProfile({
                                            ...profile,
                                            lastname: lname,
                                        });
                                    } else if (lname == "") {
                                        setProfile({
                                            ...profile,
                                            firstname: fname,
                                        });
                                    } else {
                                        setProfile({
                                            ...profile,
                                            firstname: fname,
                                            lastname: lname,
                                        });
                                    }
                                }
                            }}
                        >
                            Confirm
                        </div>
                    </a>
                    <a href="#">
                        <div className="cancel-button">Cancel</div>
                    </a>
                </div>
                <ChangeEmail ref={changeEmailRef} style={{ display: "none" }} />
                <ChangePhoneNumber
                    ref={changePhoneNumber}
                    style={{ display: "none" }}
                />
            </LayoutWithSideNav>

            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default profile;
