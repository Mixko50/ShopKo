import React, { Fragment } from 'react'
import NavLogin from './NavLogin'

const LoginLayout = (props) => {
    return (
        <Fragment>
            <NavLogin />
            <div className="page">
                <div className="left-side">

                </div>
                <div className="right-side">
                    {props.children}
                </div>
            </div>
            <style jsx>{`

            .page {
                width: 100%;
                height: 100vh;
                /*background-color: #fafaf2;*/
                display: flex;
            }
            
            .left-side {
                flex: 1;
                height: 100%;
                background-image: url(../img/login/loginb.svg);
                background-size: 700px;
                background-repeat: no-repeat;
                 background-position: center;
            }

            .right-side {
                flex: 1;
                height: 100%;
                padding: 50px 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            @media only screen and (max-width: 768px) {
                .page {
                    display: flex;
                    flex-direction: column;
                }

                .left-side {
                    display: none;
                }
            }

             @media only screen and (max-width: 1024px) {
                .left-side {
                    display: none;
                }

             }


            `}</style>
        </Fragment>
    )
}

export default LoginLayout
