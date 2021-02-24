import React, { Fragment } from 'react'

const NavLogin = () => {
    return (
        <Fragment>
            <div className="nav-login">
                <div className="logo">
                    <img src="/logo.svg"></img>
                    <h1>ShopKo</h1>
                </div>
            </div>
            <style jsx>{`
                
                .nav-login {
                    position: fixed;
                    width: 100%;
                    height: 80px;
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
                
                `}</style>
        </Fragment>
    )
}

export default NavLogin
