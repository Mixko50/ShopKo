import React, { Fragment, useContext } from 'react'
import LayoutWithSideNav from '../../components/Layout/LayoutWithSideNav'
import GenderSelect from '../../components/forum/GenderSelect'
import BirthdaySelect from '../../components/forum/BirthdaySelect'
import { ProfileContext } from '../../context/profileContext';

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

            <style jsx>{`

            .title {
                display: flex;
                height: 90px;
                justify-content: space-around;
                font-size: 30px;
                margin-bottom: 30px;
                border-bottom: 1px black solid;
            }

            .profile-setting {
                display: grid ;
                grid-template-columns: 200px 550px;
                grid-template-rows: repeat(6,60px);
                grid-column-gap: 20px;
            }

            .profile-setting > div:nth-child(2) > input:nth-child(2) {
                margin-left: 20px;
            }

            .left-grid {
                text-align: right;
            }
            
            .profile-setting > div:nth-child(odd) {
                text-align: right;
            }

            .edit {
                display : flex;
            }

            .edit-button {
                margin-left: 20px;
                color: #6930c3;
            }

            .profile-setting > div:nth-child(odd) {
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }

            .profile-setting > div:nth-child(even) {
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }

            .confirm-password {
                width: 100%;
                height: 100px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                margin: 30px 0;
            }

            .confirm-cancel-button {
                display: flex;
                width: 100%;
                justify-content: center;
                align-items: center;
            }

            .confirm-button , .cancel-button{
                margin: 0px 10px;
                width: 120px;
                height: 50px;
                background-color: #16c79a;
                border-radius: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: .4s;
                box-shadow: 0px 5px 5px rgb(202, 195, 195);
            }

            .confirm-button:hover , .cancel-button:hover{
                transform: translateY(-3px);
            }

            .confirm-button:active , .cancel-button:active{
                transform: translateY(-3px);
            }

            .cancel-button {
                background-color: #bbbbbb;
            }

            input {
                width: 250px;
                height: 35px;
                padding-left: 10px;
                outline: none;
                border: 2px #ffabe1 solid;
                border-radius: 10px;
            }
            `}</style>
        </Fragment>
    )
}

export default profile
