import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faAppleAlt, faCartPlus, faShoppingBag } from '@fortawesome/free-solid-svg-icons';



export const ProductBuyButton = () => {

    return (
        <div>
            <Button variant="contained" style={{ backgroundColor: '#f8f4e1', width: '200px', height: '60px', margin: "20px", borderRadius: "15px" }}>
                <FontAwesomeIcon icon={faCartPlus} size="2x" style={{ marginRight: "10px" }} />
                <p>Add to cart</p>
            </Button>
            <Button variant="contained" style={{ backgroundColor: '#f6dfeb', width: '200px', height: '60px', margin: "20px", borderRadius: "15px" }}>
                <FontAwesomeIcon icon={faShoppingBag} size="2x" style={{ marginRight: "10px" }} />
                <p>Buy now</p>
            </Button>

        </div >
    );
}