import { Link } from '@material-ui/core'
import React, { Fragment } from 'react'

const NavLogin = () => {
    return (
        <Fragment>
            <div className="nav-login">
                <div className="logo">
                    <a href="/home"><img src="/logo.svg"></img></a>
                    <a href="/home"><h1>ShopKo</h1></a>
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

                .logo > a > img {
                    width: 70px;
                }

                .logo > a{
                    margin-left: 30px;
                }
                
                `}</style>
        </Fragment>
    )
}

export default NavLogin
