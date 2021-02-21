import React, { Fragment } from 'react'
import LoginLayout from '../components/Layout/LoginLayout'
import Link from 'next/link'


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
                            <input placeholder="username" id=""></input>
                        </div>
                        <div className="login">
                            <p>Password :</p>
                            <input placeholder="password" id=""></input>
                        </div>
                        <div className="forgot">
                            Forgot password?
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
                            <Link href="/home"><a><div className="signup-button">
                                SignUp
                            </div></a></Link>
                        </div>
                    </div>
                </div>
            </LoginLayout>
            <style jsx>{`
            
            .login-box {
                width: 80%;
                height: 80%;
                box-shadow: 0px 7px 30px #deded9;
                border-radius: 50px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .title {
                font-size: 25px;
                margin: 60px 0px 40px 0;
            }

            .login-form {
                width: 50%;
            }
            
            .login {
                width: 100%;
                height: 100px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }

            .login > input {
                height: 40px;
                border-radius: 50px;
                outline: none;
                padding-left: 15px;
                border: none;
               box-shadow: 0px 7px 30px #deded9;
            }

            .login-button-box {
                display: flex;
                justify-content: center;
                 margin: 30px 0px;
            }

            .login-button{
                // margin: 30px 0px;
                height: 60px;
                width: 130px;
                background-color: rgb(237,162,241);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 25px;
            }

            .forgot {
                color: #a685e2;
                margin: 10px 0 10px 0;
            }

            .check{
                margin-top: 30px;
                display: flex;
                justify-content: center;
                color: red;
                display: none;
            }

            #login-check-name, #login-check-password {
                border: 1px red solid;
            }

             #login-check-password {
                 border: 1px red solid;
             }

            .signup-button-box {
                display: flex;
                width: 100%;
                justify-content: center;
            }

            .signup-button {
                height: 40px;
                width: 100px;
                background-color: #bedcfa;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 15px;
            }

            `}</style>
        </Fragment>
    )
}

export default login
