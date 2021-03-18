import React from 'react'
import Styles from '../../styles/home'
import PropTypes from 'prop-types'

export const ProductItems = ({ title, price, sold }) => {
    return (
        <div className="products">
            <div className="product-pictures"></div>
            <p id="details">{`${title}`}</p>
            <h3 id="price">{`$${price}`}</h3>
            <div className="sold-box">
                <h5 id="sold">{`Sold : ${sold}`}</h5>
            </div>
            <style jsx>{Styles}</style>
        </div>
    )
}

ProductItems.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.isRequired,
    sold: PropTypes.isRequired
}
