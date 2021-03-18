import React, { Fragment } from 'react'
import LayoutWithSideNav from '../../components/Layout/LayoutWithSideNav'
import Styled from '../../styles/account/MyOrder'

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
            <style jsx>{Styled}</style>
        </Fragment>
    )
}

export default myorder
