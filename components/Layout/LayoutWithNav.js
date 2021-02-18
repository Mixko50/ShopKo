import React, { Fragment } from 'react'
import Nav from './Nav'

const LayoutWithNav = (props) => {
    return (
        <Fragment>
            <Nav />
            {props.children}
        </Fragment>
    )
}

export default LayoutWithNav
