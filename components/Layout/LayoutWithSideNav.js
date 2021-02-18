import React, { Fragment } from 'react'
import LayoutWithNav from './LayoutWithNav'

const LayoutWithSideNav = (props) => {
    return (
        <Fragment>
            <LayoutWithNav>
                <section>
                    <div className="max-width-box">
                        <div className="sidebar">

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
                margin-top: 70px;
                width: 100%;
                height: 100vh;
                max-width: 1200px;
                display: flex;
                background-color: pink;
            }

            .sidebar {
                padding:10px;
                width: 300px;
                height: 100vh;
                background-color: gray;
            }

            .content {
                width: 100%;
                height: 100vh;
                background-color: orange;
            }
            
            `}</style>
        </Fragment>
    )
}

export default LayoutWithSideNav
