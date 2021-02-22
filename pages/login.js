import React, { Fragment } from 'react'
import LoginLayout from '../components/Layout/LoginLayout'
import Link from 'next/link'
import Styles from '../styles/login'



const login = () => {
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
                            <input placeholder="username" id="" type="email"></input>
                        </div>
                        <div className="login">
                            <p>Password :</p>
                            <input placeholder="password" id="" type="password"></input>
                        </div>
                        <div className="forgot">
                            <a href="#">Forgot password?</a>
                        </div>
                        <div className="check">
                            Something Invalid!
                        </div>
                        <div className="login-button-box">
                            <Link href="/home"><a><div className="login-button">
                                Login
                            </div></a></Link>
                        </div>
                        <div className="signup-button-box">
                            <Link href="/signup"><a><div className="signup-button">
                                SignUp
                            </div></a></Link>
                        </div>
                    </div>
                </div>
                <style jsx>{Styles}</style>
            </LoginLayout>
        </Fragment>
    )
}

export default login
