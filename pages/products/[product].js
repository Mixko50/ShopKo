import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect } from "react";
import Nav from "../../components/Layout/Nav";
import { ProductQuantity } from "../../components/forum/ProductQuantity";
import { ProductBuyButton } from "../../components/forum/ProductBuyButton";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import NameMapping from "../../utils/categories.json";
import Styles from "../../styles/products/Product";
import { SpeedDials } from "../../components/forum/SpeedDial";

const Products = () => {
    const router = useRouter();
    const { product } = router.query;

    const [data, setData] = useState(null);

    useEffect(() => {
        onFetchData();
    }, [product]);

    const onFetchData = async () => {
        try {
            console.log(product);
            // const productToString = product.toString()
            // console.log(productToString)
            console.log(NameMapping[product.charAt(0)].toLowerCase());
            const fetchedData = await axios.get(
                `https://apmix.mixko.ml/${NameMapping[
                    product.charAt(0)
                ].toLowerCase()}.json`
            );
            setData(fetchedData.data.filter((el) => el.id == product)[0]);
            console.log(fetchedData.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Fragment>
            <Nav />
            {!data ? (
                <CircularProgress />
            ) : (
                <section>
                    <div className="page-box">
                        <div className="product-box">
                            <div className="product-pic">
                                <div
                                    className="big-pic"
                                    style={{
                                        backgroundImage: `url(${data.img[0]})`,
                                    }}
                                ></div>
                                <div className="product-sub-pic">
                                    <div
                                        className="small-pic"
                                        style={{
                                            backgroundImage: `url(${data.img[0]})`,
                                        }}
                                    ></div>
                                    <div
                                        className="small-pic"
                                        style={{
                                            backgroundImage: `url(${data.img[1]})`,
                                        }}
                                    ></div>
                                    <div
                                        className="small-pic"
                                        style={{
                                            backgroundImage: `url(${data.img[2]})`,
                                        }}
                                    ></div>
                                    <div
                                        className="small-pic"
                                        style={{
                                            backgroundImage: `url(${data.img[3]})`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="product-buy">
                                <div className="product-title">
                                    <h1>{data.data.title}</h1>
                                </div>
                                <div className="product-price">
                                    <h2>${data.data.price}</h2>
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
                    <SpeedDials />
                </section>
            )}
            <style jsx>{Styles}</style>
        </Fragment>
    );
};

export default Products;
