import { faAddressCard, faLock, faMapMarkerAlt, faMoneyCheckAlt, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import LayoutWithNav from './LayoutWithNav'

const LayoutWithSideNav = (props) => {

    const name = { firstname: "Apisit", lastname: "Maneerat" }

    return (
        <Fragment>
            <LayoutWithNav>
                <section>
                    <div className="max-width-box">
                        <div className="sidebar">
                            <div className="pic-name">
                                <FontAwesomeIcon icon={faUserCircle} size="8x" />
                                <h1>{name.firstname} {name.lastname}</h1>
                            </div>
                            <div className="menu-setting">
                                <div className="menu-icon">
                                    <FontAwesomeIcon icon={faAddressCard} size="2x" color="blue" />
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="orange" />
                                    <FontAwesomeIcon icon={faMoneyCheckAlt} size="2x" color="green" />
                                    <FontAwesomeIcon icon={faLock} size="2x" color="brown" />
                                    <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#ff75a0" />
                                </div>
                                <div className="menu-bar">
                                    <p>Profile</p>
                                    <p>Address</p>
                                    <p>Payment</p>
                                    <p>Change Password</p>
                                    <p>My Order</p>
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            {props.children}
                        </div>
                    </div>
                </section>
            </LayoutWithNav>

            <style jsx>{`

            section{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            .max-width-box {
                margin-top: 60px;
                width: 100%;
                height: 100vh;
                max-width: 1200px;
                display: flex;

            }

            .sidebar {
                padding:20px;
                width: 300px;
                height: 100vh;
                display: flex;
                flex-direction: column;
            }

            .content {
                width: 100%;
                height: 100vh;
                display: flex;
                flex-direction: column;
                background-color: #f8f1f1;
                padding: 50px 90px;
            }

            .pic-name {
                margin-top: 50px;
                height: 200px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;;
                align-items: center;
            }

            .pic-name > h1{
                margin-top: 10px;
                text-align: center;
                display: flex;
            }

            .menu-setting {
                margin-top: 40px;
                display: flex;
                align-items: center;
            }

            .menu-icon {
                width: 50px;
                display: flex;
                flex-direction: column;
                height: 200px;
                justify-content: space-around;
                align-items:center;
            }

            .menu-bar {
                display: flex;
                flex-direction: column;
                margin-left: 20px;
                width: 130px;
                height: 200px;
                justify-content: space-around;
            }
            
            `}</style>
        </Fragment>
    )
}

export default LayoutWithSideNav
