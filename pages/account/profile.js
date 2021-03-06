import React, { Fragment, useEffect, useRef, useState } from "react";
import LayoutWithSideNav from "../../components/Layout/LayoutWithSideNav";
import GenderSelect from "../../components/forum/GenderSelect";
import BirthdaySelect from "../../components/forum/BirthdaySelect";
import Styled from "../../styles/account/Profile";
import ChangeEmail from "../../components/forum/ChangeEmail";
import ChangePhoneNumber from "../../components/forum/ChangePhoneNumber";
import axios from "../../utils/axios";

const profile = () => {
    const changeEmailRef = useRef(null);
    const changePhoneNumber = useRef(null);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [profile, setProfile] = useState({});

    const changeFirstname = () => {
        if (firstname && firstname != "" && firstname != null) {
            axios.post("/setting/profile/firstname", {
                firstname: firstname,
            });
            User();
            window.location.reload(false);
        }
    };

    const changeLastname = () => {
        if (lastname && lastname != "" && lastname != null) {
            axios.post("/setting/profile/lastname", {
                lastname: lastname,
            });
            User();
            window.location.reload(false);
        }
    };

    useEffect(() => {
        User();
    }, []);

    const User = async () => {
        try {
            const userAx = await axios.post(`/account/profile`);
            console.log(userAx.data);
            setProfile(userAx.data);
        } catch (error) {
            console.log("Error");
        }
    };

    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>Profile Setting</h1>
                </div>

                <div className="profile-setting">
                    <div>
                        <h4>Firstname - Lastname : </h4>
                    </div>
                    <div>
                        <input
                            placeholder={profile.firstname}
                            onChange={(ev) => setFirstname(ev.target.value)}
                            onBlur={() => {
                                changeFirstname();
                                console.log("Test1");
                            }}
                        ></input>
                        <input
                            placeholder={profile.lastname}
                            onChange={(ev) => setLastname(ev.target.value)}
                            onBlur={() => {
                                changeLastname();
                                console.log("Test2");
                            }}
                        ></input>
                    </div>
                    <div>
                        <h4>Username : </h4>
                    </div>
                    <div>{profile.username}</div>
                    <div>
                        <h4>Email : </h4>
                    </div>
                    <div className="edit">
                        <p>{profile.email}</p>
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
                    <div>
                        <h4>Phone number :</h4>
                    </div>
                    <div className="edit">
                        <p>{profile.phone}</p>
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
                    <div>
                        <h4>Gender :</h4>
                    </div>
                    <div>
                        <GenderSelect gender={profile.gender} />
                    </div>
                    <div>
                        <h4>Birthday : </h4>
                    </div>
                    <div className="edit">
                        <BirthdaySelect birthdate={profile.birthdate} />
                    </div>
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
