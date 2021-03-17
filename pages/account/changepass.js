import React, { Fragment } from 'react'
import LayoutWithSideNav from '../../components/Layout/LayoutWithSideNav'

const changepass = () => {
    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>Change Password</h1>
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
                
                
                `}</style>
        </Fragment>
    )
}

export default changepass;
