import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Fragment } from 'react'
import LayoutWithSideNav from '../../components/Layout/LayoutWithSideNav'


const payment = () => {
    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>Payment Setting</h1>
                </div>
                <div className="add-button-box">
                    <a href="#"><div className="add-button">+ Add</div></a>
                </div>
                <div className="payment-setting-box">
                    <div className="payment-setting">
                        <div className="payment-img">
                            <FontAwesomeIcon icon={faCreditCard} color="red" size="3x" />
                        </div>
                        <div className="payment-card-type">
                            <h3>Master Card</h3>
                        </div>
                        <div className="payment-card-number">
                            <h4>**** **** **** 2434</h4>
                        </div>
                        <div className="delete-payment">
                            <a href="#"><h4>Delete</h4></a>
                        </div>
                    </div>
                    <div className="payment-setting">
                        <div className="payment-img">
                            <FontAwesomeIcon icon={faCreditCard} color="red" size="3x" />
                        </div>
                        <div className="payment-card-type">
                            <h3>Master Card</h3>
                        </div>
                        <div className="payment-card-number">
                            <h4>**** **** **** 2434</h4>
                        </div>
                        <div className="delete-payment">
                            <a href="#"><h4>Delete</h4></a>
                        </div>
                    </div>

                </div>
            </LayoutWithSideNav>

            <style jsx>{`
            
            .title {
                 font-size: 30px;
                display: flex;
                height: 60px;
                justify-content: space-around;

            }
            .add-button-box {
                display: flex;
                width: 100%;
                height: 80px;
                justify-content: flex-end;
                border-bottom : 1px black solid;
            }

            .add-button{
                width: 100px;
                height: 50px;
                background-color: aqua;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
            }

            .payment-setting-box {
                width: 100%;
                height: auto;
                border-bottom: 1px black solid;
            }

            .payment-setting {
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 20px 0;

            }

            .delete-payment {
                color: #6930c3;
            }
            
            `}</style>
        </Fragment>
    )
}

export default payment
