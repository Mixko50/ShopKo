import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import Nav from '../../components/Layout/Nav'



const Index = () => {
    const router = useRouter();
    const { category } = router.query;

    return (
        <Fragment>
            <Nav />
        </Fragment>
    )
}

export default Index
