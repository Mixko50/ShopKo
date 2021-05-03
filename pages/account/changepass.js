import React, { Fragment, useState } from "react";
import LayoutWithSideNav from "../../components/Layout/LayoutWithSideNav";
import Styled from "../../styles/account/ChangePass";
import axios from "../../utils/axios";

const changepass = () => {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmNewPass, setConfirmNewPass] = useState("");
    const [valid, setValid] = useState(3);

    const check = async () => {
        try {
            const passwordCheck = await axios.post(
                "/setting/changepassword/check",
                {
                    oldPassword: oldPass,
                }
            );
            if (passwordCheck.data.isChecked) {
                if (newPass.length >= 8) {
                    if (newPass == confirmNewPass) {
                        const changePassword = await axios.post(
                            "/setting/changepassword/change",
                            {
                                newPassword: newPass,
                            }
                        );
                        if (changePassword.data.isChanged) {
                            console.log("Change password successfully");
                            setValid(4);
                        }
                    } else {
                        setValid(2);
                    }
                } else {
                    setValid(1);
                }
            } else {
                setValid(0);
            }
        } catch (error) {
            console.log("Error");
        }
    };

    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>Change Password</h1>
                </div>
                <div className="passbox">
                    <div>
                        <h4>Old password :</h4>
                    </div>
                    <div>
                        <input
                            placeholder="old password"
                            type="password"
                            onChange={(e) => setOldPass(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <h4>New password :</h4>
                    </div>
                    <div>
                        <input
                            placeholder="new password"
                            type="password"
                            onChange={(e) => setNewPass(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <h4>Confirm new password :</h4>
                    </div>
                    <div>
                        <input
                            placeholder="confirm new password"
                            type="password"
                            onChange={(e) => setConfirmNewPass(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className="button-box">
                    <a
                        onClick={() => {
                            check();
                        }}
                        href="#!"
                    >
                        <div className="confirm">Confirm</div>
                    </a>
                </div>
                {valid == 0 ? (
                    <div className="not-match">
                        Current password is not correct!
                    </div>
                ) : null}
                {valid != 0 ? (
                    <div
                        className={
                            valid > 0 && valid < 3 ? "not-match" : "match"
                        }
                    >
                        {valid == 1
                            ? "Password must be more than 8 characters."
                            : `${
                                  valid == 2
                                      ? "New password does not match!"
                                      : `${valid == 3 ? "" : "Success"}`
                              }`}
                    </div>
                ) : null}
            </LayoutWithSideNav>

            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default changepass;
