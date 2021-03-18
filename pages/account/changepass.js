import React, { Fragment, useState } from 'react'
import LayoutWithSideNav from '../../components/Layout/LayoutWithSideNav'
import Styled from '../../styles/account/changepass'

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

            <style jsx>{Styled}</style>
        </Fragment>
    )
}

export default changepass;
