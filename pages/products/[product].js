import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import Nav from '../../components/Layout/Nav'


const Products = () => {
    const router = useRouter();
    const { product } = router.query;

    return (
        <Fragment>
            <Nav />
        </Fragment>
    )
}

export default Products