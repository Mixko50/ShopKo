import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Nav from "../components/Layout/Nav";
import Styled from "../styles/account/MyOrder";
import { SpeedDials } from "../components/forum/SpeedDial";
import axios from "../utils/axios";
import { Link } from "@material-ui/core";

const cart = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchedData();
    }, []);

    const fetchedData = async () => {
        try {
            const fetchData = await axios.get(`/cart/details`);
            setData(fetchData.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`/cart/delete?id=${id}`);
            fetchedData();
        } catch (error) {
            console.log("error");
        }
    };

    return (
        <Fragment>
            <Nav />

            <section>
                <div className="cart-page-max">
                    <div className="title-cart">
                        <h1>Cart</h1>
                    </div>
                    {data.isFound
                        ? data.information.map((item) => (
                              <div
                                  className="order-box-controller"
                                  style={{
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "center",
                                  }}
                              >
                                  <div className="order-bigbox">
                                      <div className="order-box">
                                          <div
                                              className="order-number"
                                              style={{
                                                  justifyContent: "flex-end",
                                              }}
                                          >
                                              <div
                                                  className="delete-button"
                                                  onClick={() => {
                                                      deleteItem(item.id);
                                                  }}
                                              >
                                                  <p
                                                      style={{
                                                          color: "white",
                                                      }}
                                                  >
                                                      Delete
                                                  </p>
                                              </div>
                                          </div>
                                          <div className="order">
                                              <div className="suborder-box">
                                                  <div className="order-pic-box">
                                                      <div
                                                          className="order-pic"
                                                          style={{
                                                              backgroundImage: `url(${item.image})`,
                                                          }}
                                                      ></div>
                                                  </div>
                                                  <div className="order-details">
                                                      <div className="product-title">
                                                          <h4>{item.title}</h4>
                                                      </div>
                                                      <div className="product-quantity">
                                                          <h4>
                                                              quantity :{" "}
                                                              {
                                                                  item.quantity_pick
                                                              }
                                                          </h4>
                                                      </div>
                                                      <div className="product-quantity">
                                                          <h4>
                                                              Price/Each :{" "}
                                                              {item.price}
                                                          </h4>
                                                      </div>
                                                  </div>
                                                  <div className="order-price">
                                                      <h1>
                                                          ${item.total_price}
                                                      </h1>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ))
                        : null}
                    {data.isFound ? (
                        <div className="buy-box-controller">
                            <div className="buy-box">
                                <div className="buy-title">
                                    <h1>Total</h1>
                                </div>
                                <div className="button-box">
                                    <div className="buy-price">
                                        <h1>${data.total}</h1>
                                    </div>
                                    <Link
                                        href="/checkout"
                                        style={{
                                            color: "black",
                                            textDecorationLine: "none",
                                        }}
                                    >
                                        <a>
                                            <div className="buy-button">
                                                Checkout
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="buy-box-controller">
                            <div
                                className="buy-box"
                                style={{ justifyContent: "center" }}
                            >
                                <h1>No item found</h1>
                            </div>
                        </div>
                    )}
                </div>
                <SpeedDials />
            </section>

            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default cart;
