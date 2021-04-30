import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect } from "react";
import Nav from "../../components/Layout/Nav";
import { ProductQuantity } from "../../components/forum/ProductQuantity";
import { ProductBuyButton } from "../../components/forum/ProductBuyButton";
import axios from "../../utils/axios";
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
    }, []);

    const onFetchData = async () => {
        console.log("Test");
        try {
            // console.log(product);
            // console.log(NameMapping[product.charAt(0)].toLowerCase());
            // const fetchedData = await axios.get(
            //     `https://apmix.mixko.ml/${NameMapping[
            //         product.charAt(0)
            //     ].toLowerCase()}.json`
            // );
            // setData(fetchedData.data.filter((el) => el.id == product)[0]);
            // console.log(fetchedData.data);
            const fetchedData = await axios.get(
                `/products/details?id=${product ? product : 1}`
            );
            setData(fetchedData.data);
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
                                        backgroundImage: `url(${data.img})`,
                                    }}
                                ></div>
                                <div className="product-sub-pic">
                                    <div
                                        className="small-pic"
                                        style={{
                                            backgroundImage: `url(${data.img})`,
                                        }}
                                    ></div>
                                    <div
                                        className="small-pic"
                                        style={{
                                            backgroundImage: `url(${data.img})`,
                                        }}
                                    ></div>
                                    <div
                                        className="small-pic"
                                        style={{
                                            backgroundImage: `url(${data.img})`,
                                        }}
                                    ></div>
                                    <div
                                        className="small-pic"
                                        style={{
                                            backgroundImage: `url(${data.img})`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className="product-buy">
                                <div className="product-title">
                                    <h1>{data.title}</h1>
                                </div>
                                <div className="product-price">
                                    <h2>${data.price}</h2>
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
                            <div style={{ margin: "50px 0 20px 0" }}>
                                <p>Name : {data.title}</p>{" "}
                            </div>
                            <div style={{ margin: "20px 0" }}>
                                <p>Price : {data.price}$</p>{" "}
                            </div>
                            <div style={{ margin: "20px 0" }}>
                                <p>Details : {data.details}</p>{" "}
                            </div>
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
