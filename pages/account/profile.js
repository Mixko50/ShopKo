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
                                // profileState.setProfile({
                                //     firstname: "Apisit",
                                //     lastname: "Maneerat",
                                //     username: "Mixko",
                                //     password: "000",
                                //     email: "apisithotmail@hotmail.co.th",
                                //     phone: "0632458648",
                                //     gender: 1,
                                //     payment: [
                                //         {
                                //             id: "Master card",
                                //             number: "0000111122223333",
                                //         },
                                //         {
                                //             id: "Visa",
                                //             number: "0000111122223333",
                                //         },
                                //     ],
                                //     address: [
                                //         {
                                //             firstname: "Apisit",
                                //             lastname: "Maneerat",
                                //             province: "Bangkok",
                                //             district: "Phra Khanong",
                                //             subdistrict: "Bang chak",
                                //         },
                                //     ],
                                //     profilepic:
                                //         "https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.0-9/78168108_2953186831382681_1766514813279666176_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeHxkbu67Sg5uYj1cbc2r7qImktqjmfOG2qaS2qOZ84bavTZAD79YeT-IJTh8Nc62XfEO81xjI9UNgTWYYS7PSFh&_nc_ohc=EPGDiVy9k3UAX8JAJve&_nc_ht=scontent.fbkk7-3.fna&oh=0b775b1d0896e159085dc0c357282776&oe=6080B4E3",
                                // });
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
