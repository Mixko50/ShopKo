import React, { Fragment } from 'react'

const LoginLayout = (props) => {
    return (
        <Fragment>
            <div className="page">
                <div className="left-side">
                    <div className="logo">
                        <img src="/logo.svg"></img>
                        <h1>ShopKo</h1>
                    </div>
                </div>
                <div className="right-side">
                    {props.children}
                </div>
            </div>
            <style jsx>{`

            .page {
                width: 100%;
                height: 100vh;
                background-color: #fafaf2;
                display: flex;
            }
            
            .left-side {
                width: 50vw;
                height: 100%;
                background-image: url(../img/login/loginb.svg);
                background-size: 700px;
                background-repeat: no-repeat;
                 background-position: center;
            }

            .logo {
                display: flex;
                align-items: center;
                padding: 20px 50px;
            }

            .logo > img {
                width: 70px;
            }

            .logo > h1{
                margin-left: 30px;
            }

            .right-side {
                width: 50vw;
                height: 100%;
                padding: 50px 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            `}</style>
        </Fragment>
    )
}

export default LoginLayout
