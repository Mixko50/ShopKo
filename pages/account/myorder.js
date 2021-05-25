import React, { Fragment, useState, useEffect } from "react";
import LayoutWithSideNav from "../../components/Layout/LayoutWithSideNav";
import Styled from "../../styles/account/MyOrder";
import axios from "../../utils/axios";

const myorder = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchedData();
    }, []);

    const fetchedData = async () => {
        try {
            const allOrder = await axios.get(`/setting/myorder`);
            setData(allOrder.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>My Order</h1>
                </div>
                {data.isFound
                    ? data.information.map((item) => (
                          <div className="order-bigbox">
                              <div className="order-box">
                                  <div
                                      className="order-number"
                                      style={{ padding: "0 25px" }}
                                  >
                                      <p>
                                          Order number:{" "}
                                          <span>
                                              <a href="#">
                                                  {item.order_item_id}
                                              </a>
                                          </span>
                                      </p>
                                      <p>
                                          <span style={{ color: "green" }}>
                                              Complete
                                          </span>
                                      </p>
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
                                                      quantity : {item.quantity}
                                                  </h4>
                                              </div>
                                              <div className="product-quantity">
                                                  <h4>
                                                      Price/Each : {item.price}
                                                  </h4>
                                              </div>
                                          </div>
                                          <div className="order-price">
                                              <h1>฿{item.total_price}</h1>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))
                    : null}
            </LayoutWithSideNav>
            <style jsx>{Styled}</style>
        </Fragment>
    );
};

export default myorder;
