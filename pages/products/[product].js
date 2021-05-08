import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect, useRef } from "react";
import Nav from "../../components/Layout/Nav";
import { ProductQuantity } from "../../components/forum/ProductQuantity";
import { ProductBuyButton } from "../../components/forum/ProductBuyButton";
import axios from "../../utils/axios";
import { CircularProgress } from "@material-ui/core";
import Styles from "../../styles/products/Product";
import { SpeedDials } from "../../components/forum/SpeedDial";
import qs from "qs";

const Products = () => {
    const router = useRouter();
    const { product } = router.query;

    const productQuantity = useRef(null);

    const [data, setData] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (onFetchData()) {
        }
    }, [product]);

    const onFetchData = async () => {
        console.log("Test");
        try {
            const fetchedData = await axios.get(
                `/products/details?id=${product}`
            );
            setData(fetchedData.data);
        } catch (err) {
            console.log(err);
        }
    };

    const quantityCaller = async () => {
        let a = await productQuantity.current.getQuantity();
        setQuantity(a);
        return a;
    };

    const addToCart = () => {
        try {
            console.log(productQuantity.current.getQuantity());
            console.log(data.id);
            axios.post(
                `/products/addtocart`,
                qs.stringify({
                    productId: data.id,
                    quantity: productQuantity.current.getQuantity(),
                })
            );
        } catch (err) {
            console.log("error");
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
                                        backgroundImage: `url(${data.image})`,
                                    }}
                                ></div>
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
                                        <ProductQuantity
                                            ref={productQuantity}
                                        />
                                    </div>
                                    <div className="product-buy-button">
                                        <ProductBuyButton
                                            addToCart={addToCart}
                                            id={data.id}
                                            quantity={quantityCaller}
                                        />
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
                            <div
                                style={{
                                    margin: "20px 0",
                                    whiteSpace: "pre-wrap",
                                }}
                            >
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
