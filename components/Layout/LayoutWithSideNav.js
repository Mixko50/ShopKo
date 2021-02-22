import { faAddressCard, faLock, faMapMarkerAlt, faMoneyCheckAlt, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import LayoutWithNav from './LayoutWithNav'
import Link from 'next/link'

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
                                    <Link href="/account/profile" passHref><a><FontAwesomeIcon icon={faAddressCard} size="2x" color="blue" /></a></Link>
                                    <Link href="/account/address"><a><FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="orange" /></a></Link>
                                    <Link href="/account/payment"><a><FontAwesomeIcon icon={faMoneyCheckAlt} size="2x" color="green" /></a></Link>
                                    <Link href="#"><a><FontAwesomeIcon icon={faLock} size="2x" color="brown" /></a></Link>
                                    <Link href="/account/myorder"><a><FontAwesomeIcon icon={faShoppingCart} size="2x" color="#ff75a0" /></a></Link>
                                </div>
                                <div className="menu-bar">
                                    <Link href="/account/profile" ><p>Profile</p></Link>
                                    <Link href="/account/address"><p>Address</p></Link>
                                    <Link href="/account/payment"><p>Payment</p></Link>
                                    <Link href="#"><p>Change Password</p></Link>
                                    <Link href="/account/myorder"><p>My Order</p></Link>
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

            .menu-bar > p {
                cursor: pointer;
            }

            .menu-icon > a {
                cursor: pointer;
            }
            
            `}</style>
        </Fragment>
    )
}

export default LayoutWithSideNav
