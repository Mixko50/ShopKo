import React, { Fragment, useState } from "react";
import LoginLayout from "../components/Layout/LoginLayout";
import Styles from "../styles/login";
import qs from "qs";
import { useRouter } from "next/router";
import axios from "../utils/axios";

const signup = () => {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");

    const [signupPassword, setSignupPassword] = useState(true);
    const [checkPassword2, setCheckPassword2] = useState(true);
    const [boxCheckEmail, setBoxCheckEmail] = useState(true);
    const [confirmPhone, setConfirmPhone] = useState(true);
    const [checkUsername, setCheckUsername] = useState(true);
    const [checkUserAx, setCheckUserAx] = useState(true);
    const [checkEmailAx, setCheckEmailAx] = useState(true);

    const checkPassword = () => {
        if (password.length >= 8) {
            setSignupPassword(true);
            if (password == confirmPassword) {
                setCheckPassword2(true);
                return true;
            } else {
                setCheckPassword2(false);
                return false;
            }
        } else {
            setSignupPassword(false);
            if (password == confirmPassword) {
                setCheckPassword2(true);
            } else {
                setCheckPassword2(false);
            }
            return false;
        }
    };

    const emailCheck = () => {
        const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailPattern.test(email) == true) {
            setBoxCheckEmail(true);
            return true;
        } else {
            setBoxCheckEmail(false);
            return false;
        }
    };

    const phoneNumberCheck = () => {
        const phonePattern = /(\d{3})-(\d{3})-(\d{4})|(\d{10})/;
        if (phonePattern.test(phone) == true) {
            setConfirmPhone(true);
            return true;
        } else {
            setConfirmPhone(false);
            return false;
        }
    };

    const checkUsernameF = () => {
        if (username.length > 0) {
            setCheckUsername(true);
            return true;
        } else {
            setCheckUsername(false);
            return false;
        }
    };

    const signup = async () => {
        await axios.post(`/account/signup`, {
            firstname: firstname,
            lastname: lastname,
            username: username,
            phone: phone,
            password: password,
            email: email,
        });
    };
    const checkUsernameFromAxios = async () => {
        const user = await axios.post(
            `/account/checkusername`,
            qs.stringify({
                username: username,
            })
        );
        if (user.data.checkUsername == false) {
            setCheckUserAx(true);
            return true;
        } else {
            setCheckUserAx(false);
            return false;
        }
    };

    const checkEmailFromAxios = async () => {
        const user = await axios.post(
            `/account/checkemail`,
            qs.stringify({
                email: email,
            })
        );
        if (user.data.checkEmail == false) {
            setCheckEmailAx(true);
            return true;
        } else {
            setCheckEmailAx(false);
            return false;
        }
    };

    return (
        <Fragment>
            <LoginLayout>
                <div className="login-box">
                    <div className="title">
                        <h1>SignUp</h1>
                    </div>
                    <div className="login-form">
                        <div className="login">
                            <p>Firstname :</p>
                            <input
                                placeholder="firstname"
                                id=""
                                onChange={(ev) => setFirstname(ev.target.value)}
                            ></input>
                        </div>
                        <div className="login">
                            <p>Lastname :</p>
                            <input
                                placeholder="lastname"
                                id=""
                                onChange={(ev) => setLastname(ev.target.value)}
                            ></input>
                        </div>
                        <div className="login">
                            <p>Username :</p>
                            <input
                                placeholder="username"
                                id=""
                                onChange={(ev) => setUsername(ev.target.value)}
                            ></input>
                        </div>
                        <div className="login">
                            <p>Email :</p>
                            <input
                                placeholder="email"
                                id=""
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="login">
                            <p>Phone number :</p>
                            <input
                                placeholder="phone number"
                                id="phone-login"
                                type="number"
                                onChange={(t) => setPhone(t.target.value)}
                            ></input>
                        </div>
                        <div className="login">
                            <p>Password :</p>
                            <input
                                placeholder="password"
                                id="password-signup"
                                type="password"
                                onChange={(ev) => setPassword(ev.target.value)}
                            ></input>
                        </div>
                        <div className="login">
                            <p>Confirm Password :</p>
                            <input
                                placeholder="confirm password"
                                id="confirm-password-signup"
                                type="password"
                                onChange={(ev) =>
                                    setConfirmPassword(ev.target.value)
                                }
                            ></input>
                        </div>
                        {checkEmailAx ? null : (
                            <div className="check">Email is already used</div>
                        )}
                        {checkUserAx ? null : (
                            <div className="check">
                                Username is already used
                            </div>
                        )}
                        {boxCheckEmail ? null : (
                            <div className="check">Invalid email</div>
                        )}
                        {confirmPhone ? null : (
                            <div className="check">Invalid Phone number</div>
                        )}
                        {checkUsername ? null : (
                            <div className="check">Invalid Username</div>
                        )}
                        {signupPassword ? null : (
                            <div className="check">
                                Password must be more than 8 characters.
                            </div>
                        )}
                        {checkPassword2 ? null : (
                            <div className="check">Password does not match</div>
                        )}
                        {/* <div className="check">
                            Something Invalid!
                        </div> */}
                        <div className="login-button-box">
                            <div
                                className="login-button"
                                onClick={async () => {
                                    if (
                                        checkPassword() &
                                        emailCheck() &
                                        phoneNumberCheck() &
                                        checkUsernameF() &
                                        (await checkUsernameFromAxios()) &
                                        (await checkEmailFromAxios())
                                    ) {
                                        console.log("Passed!");
                                        signup();
                                        router.push("/login");
                                    }
                                }}
                            >
                                Signup
                            </div>
                        </div>
                    </div>
                </div>
            </LoginLayout>
            <style jsx>{Styles}</style>
        </Fragment>
    );
};

export default signup;
