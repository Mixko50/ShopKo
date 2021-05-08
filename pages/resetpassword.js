import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import LoginLayout from "../components/Layout/LoginLayout";
import Styles from "../styles/login";
import Link from "next/link";
import axios from "../utils/axios";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [valid, setValid] = useState(0);

    const changePassword = async () => {
        if (password.length >= 8) {
            if (password == confirmPassword) {
                const changePasswordAx = await axios.post(
                    `/setting/resetPassword/confirm`,
                    {
                        newPassword: password,
                    }
                );
                if (changePasswordAx.data.isChanged) {
                    window.location.href = "/login";
                }
                setValid(0);
            } else {
                setValid(2);
            }
        } else {
            setValid(1);
        }
    };
    return (
        <Fragment>
            <LoginLayout>
                <div className="login-box" style={{ height: "auto" }}>
                    <div className="title">
                        <h1>Reset Password</h1>
                    </div>
                    <div className="login-form">
                        <div className="login">
                            <p>Password :</p>
                            <input
                                placeholder="password"
                                id={1}
                                type="password"
                                onChange={(ev) => setPassword(ev.target.value)}
                            ></input>
                        </div>
                        <div className="login">
                            <p>Confirm password :</p>
                            <input
                                placeholder="confirm password"
                                type="password"
                                onChange={(ev) =>
                                    setConfirmPassword(ev.target.value)
                                }
                            ></input>
                        </div>
                        {valid == 0 ? null : (
                            <div className="check">
                                {valid == 1
                                    ? "Password must be more than 8 characters."
                                    : "New password does not match!"}
                            </div>
                        )}
                        <div className="login-button-box">
                            <div
                                className="login-button"
                                onClick={changePassword}
                            >
                                Confirm
                            </div>
                        </div>
                    </div>
                </div>
            </LoginLayout>
            <style jsx>{Styles}</style>
        </Fragment>
    );
};
export default ResetPassword;
