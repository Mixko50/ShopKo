import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import Nav from '../../components/Layout/Nav'
import NameMapping from '../../utils/categories.json'

const Index = () => {
    const router = useRouter();
    const { category } = router.query;

    return (
        <Fragment>
            <Nav />
            <section>
                <div className="page-box">
                    <div className="category-title">
                        <h1>{NameMapping[category]}</h1>
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

                .category-title {
                    width: 100%;
                    height: 200px;
                    border-radius: 15px;
                    box-shadow: 0px 0px 10px rgb(212, 206, 206);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: aliceblue;
                }

                .category-title > h1 {
                    font-size: 70px;
                }


                
                `}</style>
        </Fragment>
    )
}

export default Index
