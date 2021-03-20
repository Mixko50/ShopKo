import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import Nav from '../../components/Layout/Nav'


const Products = () => {
    const router = useRouter();
    const { product } = router.query;

    return (
        <Fragment>
            <Nav />
            <section>
                <div className="page-box">
                    <div className="page-box">
                        <div className="product-box">

                        </div>
                        <div className="product-details">

                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`

                section{
                    width: 100%;
                    height: 100%;
                    padding-top: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .page-box {
                    width: 100%;
                    height: 100%;
                    max-width: 1200px;
                    display: flex;
                    flex-direction: column;
                    margin-top: 10px;
                }

                .product-box {
                    width: 100%;
                    height: 500px;
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: 0px 0px 10px rgb(212, 206, 206);
                }

                .product-details {
                    margin: 40px 0;
                    width: 100%;
                    height: 300px;
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: 0px 0px 10px rgb(212, 206, 206);
                }
                
                `}</style>
        </Fragment>
    )
}

export default Products