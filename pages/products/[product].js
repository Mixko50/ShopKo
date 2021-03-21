import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import Nav from '../../components/Layout/Nav'
import { ProductQuantity } from '../../components/forum/ProductQuantity'
import { ProductBuyButton } from '../../components/forum/ProductBuyButton'
import ProductDetails from '../../components/ProductDetails/ProductDetails'


const Products = () => {
    const router = useRouter();
    const { product } = router.query;

    return (
        <Fragment>
            <Nav />
            <section>
                <div className="page-box">
                    <div className="product-box">
                        <div className="product-pic">
                            <img src="https://static.vecteezy.com/system/resources/previews/000/246/312/original/mountain-lake-sunset-landscape-first-person-view-vector.jpg"></img>
                            <div className="product-sub-pic">
                                <img src="https://static.vecteezy.com/system/resources/previews/000/246/312/original/mountain-lake-sunset-landscape-first-person-view-vector.jpg"></img>
                                <img src="https://static.vecteezy.com/system/resources/previews/000/246/312/original/mountain-lake-sunset-landscape-first-person-view-vector.jpg"></img>
                                <img src="https://static.vecteezy.com/system/resources/previews/000/246/312/original/mountain-lake-sunset-landscape-first-person-view-vector.jpg"></img>
                                <img src="https://static.vecteezy.com/system/resources/previews/000/246/312/original/mountain-lake-sunset-landscape-first-person-view-vector.jpg"></img>
                            </div>
                        </div>
                        <div className="product-buy">
                            <div className="product-title">
                                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
                            </div>
                            <div className="product-price">
                                <h2>$65</h2>
                            </div>
                            <div className="quantity-box">
                                <p>Quantity</p>
                                <div className="product-quantity">
                                    <ProductQuantity />
                                </div>
                                <div className="product-buy-button">
                                    <ProductBuyButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-details-box">
                        <div className="product-details-title">
                            <h1>Details of product</h1>
                        </div>
                        <ProductDetails />
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

                .product-box, .product-details-box{
                    width: 100%;
                    height: 650px;
                    padding: 10px;
                    border-radius: 15px;
                    box-shadow: 0px 0px 10px rgb(212, 206, 206);
                    display: flex;
                }

                .product-details-box {
                    padding: 50px !important;
                    margin: 40px 0;
                    height: auto;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                }

                .product-pic {
                    flex: 40%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .product-pic > img {
                    width: 100%;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .product-buy {
                    flex: 60%;
                    height: 100%;
                    padding: 35px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .product-sub-pic {
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;
                }

                .product-sub-pic > img{
                    border-radius: 10px;
                    width: 24%;
                    height: 100%;
                    transition: .3s;
                }

                .product-sub-pic > img:hover {
                    transform: translateY(-2px);
                    cursor: pointer;
                }

                .product-title > h1{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }

                .product-title {
                    height: 100px;
                }

                .product-price {
                    width: 100%;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    padding-left: 10px;
                    color: orange;
                    font-size: 20px;
                }

                .product-quantity {
                    display: flex;
                    width: 100%;
                    margin-top: 20px;
                    max-width: 200px;
                    align-items: center;
                    justify-content: space-around;
                }

                .product-buy > p{
                    margin-top: 20px;
                    display: flex;
                    justify-content: center;
                }

                .product-details-title {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }

                .product-details {
                    margin-top: 50px ;
                }

                .quantity-box {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                
                `}</style>
        </Fragment>
    )
}

export default Products