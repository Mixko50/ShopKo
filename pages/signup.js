import React, { Fragment, useState } from 'react'
import LoginLayout from '../components/Layout/LoginLayout'
import Styles from '../styles/login'
import Link from 'next/link'
import { useRouter } from 'next/router'

const signup = () => {

    const router = useRouter()
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const [signupUsername, setSignupUsername] = useState(true)
    const [signupPassword, setSignupPassword] = useState(true)
    const [checkPassword2, setCheckPassword2] = useState(true)
    const [email, setEmail] = useState("");
    const [boxCheckEmail, setBoxCheckEmail] = useState(true);
    const [phone, setPhone] = React.useState("");
    const [confirmPhone, setConfirmPhone] = useState(true)

    const checkPassword = () => {
        console.log("TETT");
        if (password.length >= 8) {
            if (password == confirmPassword) {
                setSignupPassword(true)
                setCheckPassword2(true)
                return true
            } else {
                setCheckPassword2(false)
                setSignupPassword(false)
                return false
            }
        } else {
            setSignupPassword(false)
            if (password == confirmPassword) {
                setCheckPassword2(true)
            } else {
                setCheckPassword2(false)
            }
            return false
        }
    }
    

    const emailCheck = () => {
        console.log("OKEMAIL");
        const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(emailPattern.test(email) == true){
            setBoxCheckEmail(true)
            return true
        } else {
            setBoxCheckEmail(false)
            return false
        }   
    }

    const phoneNumberCheck = () => {
        const phonePattern = /(\d{3})-(\d{3})-(\d{4})|(\d{10})/
        if (phonePattern.test(phone) == true) {
            setConfirmPhone(true)
            return true
        } else {
            setConfirmPhone(false)
            return false
        }
    }

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
                            <input placeholder="email" id="" type="email" onChange={(e) => setEmail(e.target.value)} ></input>
                        </div>
                        <div className="login">
                            <p>Phone number :</p>
                            <input placeholder="phone number" id="phone-login" type="number" onChange={(t) => setPhone(t.target.value)} ></input>
                        </div>
                        <div className="login">
                            <p>Password :</p>
                            <input placeholder="password" id="password-signup" type="password"  onChange={(ev) => setPassword(ev.target.value)}></input>
                        </div>
                        <div className="login">
                            <p>Confirm Password :</p>
                            <input 
                            placeholder="confirm password" 
                            id="confirm-password-signup" 
                            type="password"
                            onChange={(ev) => setConfirmPassword(ev.target.value)}
                            >
                            
                            </input>
                        </div>
                        { signupPassword ? null : <div className="check">Password must be more than 8 characters.</div> }
                        { checkPassword2 ? null : <div className="check">Password does not match</div> }
                        { boxCheckEmail ? null : <div className="check">Invalid email</div> }
                        { confirmPhone ? null : <div className="check">Invalid Phone number</div> }
                        {/* <div className="check">
                            Something Invalid!
                        </div> */}
                        <div className="login-button-box">
                            <div 
                            className="login-button"
                            onClick={() => {
                                if (checkPassword() == true && emailCheck() == true && phoneNumberCheck() == true) {
                                    router.push('/home')
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
        </Fragment >
    )
}

export default signup
