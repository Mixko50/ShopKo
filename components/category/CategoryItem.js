import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Styles from "../../styles/home";
import { Link } from "@material-ui/core";

export const CategoryItem = ({ title, id }) => {
    return (
        <div className="categories">
            <Link href={`/categories/${title.toLowerCase()}`}>
                <a>
                    <img
                        src={`https://storage.googleapis.com/shopko/categories-pic/${title.toLowerCase()}.svg`}
                        width={50}
                    ></img>
                </a>
            </Link>
            <p>
                <Link
                    href={`/categories/${title.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    {title}
                </Link>
            </p>
            <style jsx>{Styles}</style>
        </div>
    );
};

CategoryItem.propTypes = {
    title: PropTypes.string.isRequired,
};
