import React, { Fragment } from 'react'
import LayoutWithSideNav from '../../components/Layout/LayoutWithSideNav'


const myorder = () => {
    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>My Order</h1>
                </div>
                <div className="order-bigbox">
                    <div className="order-box">
                        <div className="order-number">
                            <p>Order: <span><a href="#">325235666</a></span></p>
                        </div>
                        <div className="order">

                        </div>
                        <div className="total">

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
            
            .order-bigbox {
                display: flex;
                width: 100%;
                justify-content: center;
            }

            .order-box {
                margin: 50px 0;
                display:flex ;
                flex-direction: column;
                width: 90%;
                height: 250px;
                background-color: whitesmoke;
                border: 1px black solid;
                border-radius: 20px;
            }

            .order-number {
                 align-items: center;
                padding: 10px 20px;
                display: flex;
                width: 100%;
                height: 50px;
                border-bottom: 1px black solid;
            }
            
            .order {
                padding: 10px;
                display: flex;
                width: 100%;
                height: 150px;
                border-bottom: 1px black solid;
            }

            .total {
                padding: 10px;
                display: flex;
                width: 100%;
                height: 50px;
                padding: 10px 20px;
                align-items: center;
            }
            
            .total-order {
                color: green;
                font-size: 50px;
            }
            
            `}</style>
        </Fragment>
    )
}

export default myorder
