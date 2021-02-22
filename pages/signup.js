import React, { Fragment } from 'react'
import LoginLayout from '../components/Layout/LoginLayout'
import Styles from '../styles/login'
import Link from 'next/link'

const signup = () => {
    return (
        <Fragment>
            <LoginLayout>
                <div className="login-box">
                    <div className="title">
                        <h1>SignUp</h1>
                    </div>
                    <div className="login-form">
                        <div className="login">
                            <p>Username :</p>
                            <input placeholder="username" id="" ></input>
                        </div>
                        <div className="login">
                            <p>Email :</p>
                            <input placeholder="email" id="" type="email"></input>
                        </div>
                        <div className="login">
                            <p>Phone number :</p>
                            <input placeholder="phone number" id="phone-login" type="number" ></input>
                        </div>
                        <div className="login">
                            <p>Password :</p>
                            <input placeholder="password" id="password-signup" type="password" style={{ color: "pink" }}></input>
                        </div>
                        <div className="login">
                            <p>Confirm Password :</p>
                            <input placeholder="confirm password" id="confirm-password-signup" type="password"></input>
                        </div>
                        <div className="check">
                            Something Invalid!
                        </div>
                        <div className="login-button-box">
                            <Link href="/home"><a><div className="login-button">
                                Signup
                            </div></a></Link>
                        </div>

                    </div>
                </div>
            </LoginLayout>
            <style jsx>{Styles}</style>
        </Fragment >
    )
}

export default signup
