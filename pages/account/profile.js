import React, { Fragment, useContext } from 'react'
import LayoutWithSideNav from '../../components/Layout/LayoutWithSideNav'
import GenderSelect from '../../components/forum/GenderSelect'
import BirthdaySelect from '../../components/forum/BirthdaySelect'
import { ProfileContext } from '../../context/profileContext';
import Styled from '../../styles/account/Profile'

const profile = () => {
    const profileState = useContext(ProfileContext);
    const profile = profileState.profile;

    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>Profile Setting</h1>
                </div>

                <div className="profile-setting" >
                    <div>Firstname - Lastname : </div>
                    <div>
                        <input placeholder={profile.firstname}></input>
                        <input placeholder={profile.lastname}></input>
                    </div>
                    <div>Username : </div>
                    <div><input placeholder={profile.username} id="firstname"></input></div>
                    <div>Email : </div>
                    <div className="edit">
                        <p>{profile.email}</p>
                        <a href="#"><div className="edit-button">Edit</div></a>
                    </div>
                    <div>Phone number :</div>
                    <div className="edit">
                        <p>{profile.phone}</p>
                        <a href="#"><div className="edit-button">Edit</div></a>
                    </div>
                    <div>Gender :</div>
                    <div>
                        <GenderSelect />
                    </div>
                    <div>Birthday : </div>
                    <div className="edit">
                        <BirthdaySelect />
                    </div>
                </div>
                <div className="confirm-password">
                    <h3>Confirm Password</h3>
                    <input type="password"></input>
                </div>
                <div className="confirm-cancel-button">
                    <a href="#"><div className="confirm-button" onClick={() => {
                        profileState.setProfile({
                            firstname: "Apisit",
                            lastname: "Maneerat",
                            username: "Mixko",
                            email: "apisitmaneerat@hotmail.co.th",
                            phone: "0632458648",
                            gender: 1,
                        })
                    }}>Confirm</div></a>
                    <a href="#"><div className="cancel-button">Cancel</div></a>
                </div>
            </LayoutWithSideNav>

            <style jsx>{Styled}</style>
        </Fragment>
    )
}

export default profile
