import React, { Fragment, useState } from 'react'
import LayoutWithSideNav from '../../components/Layout/LayoutWithSideNav'

const changepass = () => {

    const [oldPass, setOldPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [confirmNewPass, setConfirmNewPass] = useState('')
    const [valid, setValid] = useState(0)

    const getOldPassword = () => {
        if (oldPass == "000" || oldPass == "mixko") {
            return "null"
        } else {
            return 'password-check'
        }
    }
    const check = () => {
        if (oldPass == "000" || oldPass == "mixko") {
            if (newPass && newPass == confirmNewPass) {
                setValid(1)
            } else {
                setValid(2)
            }
        }

    }

    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>Change Password</h1>
                </div>
                <div className="passbox">
                    <div>Old password :</div>
                    <div>
                        <input placeholder="old password" type="password" id={getOldPassword()} onChange={(e) => setOldPass(e.target.value)}></input>
                    </div>
                    <div>New password :</div>
                    <div>
                        <input placeholder="new password" type="password" onChange={(e) => setNewPass(e.target.value)}></input>
                    </div>
                    <div>Confirm new password :</div>
                    <div>
                        <input placeholder="confirm new password" type="password" onChange={(e) => setConfirmNewPass(e.target.value)}></input>
                    </div>
                </div>
                <div className="button-box">
                    <a onClick={check} href="#!"><div className="confirm">Confirm</div></a>
                </div>
                {valid != 0 ? <div className={valid == 1 ? 'match' : 'not-match'}>
                    {valid == 1 ? 'Confirm' : 'Password does not match!'}
                </div> : null}

            </LayoutWithSideNav>

            <style jsx>{`

            .title {
                display: flex;
                height: 90px;
                justify-content: space-around;
                font-size: 30px;
                margin-bottom: 30px;
                border-bottom: 1px black solid;
            }

            .passbox {
                margin:50px 0;
                display: grid ;
                grid-template-columns: 200px 550px;
                grid-template-rows: repeat(3,60px);
                grid-column-gap: 20px;

            }

            .passbox > div:nth-child(odd) {
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }

            .passbox > div:nth-child(even){
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }

            input {
                width: 350px;
                height: 40px;
                padding: 0 10px;
                outline: none;
                border: 2px #ffabe1 solid;
                border-radius: 10px;
            }

            .button-box {
                width: 100%;
                display: flex;
                justify-content: center;
            }

            .confirm {
                margin: 0px 10px;
                width: 150px;
                height: 50px;
                background-color: #16c79a;
                border-radius: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                text-decoration: none;
                color: black;
                transition: .3s;
                box-shadow: 0px 4px 10px rgb(173, 173, 173);
            }

            .confirm:hover {
                transform: translateY(-3px);
            }

            .confirm:active {
                transform: translateY(3px);
            }

            .not-match, .match {
                margin-top: 30px;
                width: 100%;
                display: flex;
                justify-content: center;
                color: red;
            }

            .match {
                margin-top: 30px;
                color: #16c79a;
            }

            #password-check {
                border: 2px solid red;
            }
                
                `}</style>
        </Fragment>
    )
}

export default changepass;
