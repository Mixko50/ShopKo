import React from "react";
import Styles from "../../styles/home";
import PropTypes from "prop-types";
import { Link } from "@material-ui/core";

export const ProductItems = ({ title, price, sold, image, id }) => {
    return (
        <Link href={`/products/${id}`}>
            {" "}
            <div className="products">
                <div
                    className="product-pictures"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="details-box">
                    <p id="details">{`${title}`}</p>
                </div>
                <h3 id="price">{`฿${price}`}</h3>
                <div className="sold-box">
                    <h5 id="sold">{`Sold : ${sold}`}</h5>
                </div>
                <style jsx>{Styles}</style>
            </div>
        </Link>
    );
};

ProductItems.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.isRequired,
    sold: PropTypes.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.isRequired,
};
