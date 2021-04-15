import React, { Fragment, useState, useRef } from "react";
import LoginLayout from "../components/Layout/LoginLayout";
import Link from "next/link";
import Styles from "../styles/login";
import { useRouter } from "next/router";
import axios from "../utils/axios";
import ForgotPasswordD from "../components/forum/ForgotPasswordD";

const Login = () => {
    const ref = useRef(null);
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState(true);

    const onKeyPressed = (e) => {
        console.log(e.key);
        if (e.key == "Enter") {
            login();
        }
    };
    const login = async () => {
        const user = await axios.get(
            `/account/login?username=${username}&password=${password}`
        );
        console.log(user.data);
        console.log(username + "  " + password);
        if (
            username === user.data.username &&
            password === user.data.password
        ) {
            router.push("/home");
        } else {
            setUsername("");
            setPassword("");
            setValid(false);
        }
    };

    const getUsername = () => {
        if (!valid) return "login-check-name";
    };

    const getPassword = () => {
        if (!valid) return "login-check-password";
    };

    return (
        <Fragment>
            <LoginLayout>
                <div className="login-box">
                    <div className="title">
                        <h1>Login</h1>
                    </div>
                    <div className="login-form">
                        <div className="login">
                            <p>Username :</p>
                            <input
                                placeholder="username"
                                id={getUsername()}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                        </div>
                        <div className="login">
                            <p>Password :</p>
                            <input
                                placeholder="password"
                                id={getPassword()}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={onKeyPressed}
                            ></input>
                        </div>
                        <div className="forgot">
                            <a
                                href="#"
                                onClick={() => {
                                    ref.current.open();
                                }}
                            >
                                Forgot password?
                            </a>
                        </div>
                        {!valid ? (
                            <div className="check">
                                Username or Password Invalid!
                            </div>
                        ) : null}

                        <div className="login-button-box">
                            <div className="login-button" onClick={login}>
                                Login
                            </div>
                        </div>
                        <div className="signup-button-box">
                            <Link href="/signup">
                                <a>
                                    <div className="signup-button">SignUp</div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <ForgotPasswordD ref={ref} />
                <style jsx>{Styles}</style>
            </LoginLayout>
        </Fragment>
    );
};

export default Login;
