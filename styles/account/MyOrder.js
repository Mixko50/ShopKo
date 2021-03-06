import css from "styled-jsx/css";

export default css`
    .title {
        font-size: 30px;
        display: flex;
        height: 60px;
        justify-content: space-around;
        margin-bottom: 30px;
    }

    .order-bigbox {
        display: flex;
        width: 800px;
        justify-content: center;
        margin: 0;
    }

    .order-box {
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        width: 90%;
        height: auto;
        background-color: whitesmoke;
        border-radius: 15px;
        box-shadow: 0px 2px 5px rgb(187, 182, 182);
    }

    .order-number,
    .total {
        align-items: center;
        padding: 10px 30px;
        display: flex;
        width: 100%;
        height: 50px;
        border-bottom: 1px rgb(177, 174, 174) solid;
        justify-content: space-between;
    }

    .order-number {
        padding: 10px 10px;
    }

    .delete-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 30px;
        background-color: red;
        border-radius: 10px;
        cursor: pointer;
    }

    .order {
        padding: 10px;
        display: flex;
        width: 100%;
        height: auto;
    }

    .total {
        padding: 10px;
        display: flex;
        width: 100%;
        height: 50px;
        padding: 10px 20px;
        align-items: center;
    }

    .product-title {
        height: 55px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .product-quantity {
        margin: 10px 0;
    }

    .suborder-box {
        height: 180px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .order-pic-box {
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        /* width: 200px; */
        height: 100%;
    }

    .order-pic {
        background-color: black;
        background-size: cover;
        background-position: center;
        width: 150px;
        height: 150px;
        border-radius: 10px;
    }

    .order-details {
        flex: 6;
        display: flex;
        padding: 20px;
        /* width: 350px; */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }

    .order-price {
        flex: 2;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
    }

    .order-price > h1 {
        color: #f7bb08;
    }

    .total {
        border: none;
        padding: 0 40px;
    }

    section {
        width: 100%;
        height: 100%;
        padding-top: 70px;
        display: flex;
        justify-content: center;
    }

    .success-page-max,
    .checkout-page-max,
    .cart-page-max {
        width: 100%;
        height: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    .title-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
        width: 100%;
    }

    .title-cart > h1 {
        font-size: 50px;
    }

    .address-box-controller,
    .buy-box-controller {
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 20px 0;
        height: auto;
    }

    .buy-box {
        width: 800px;
        height: 100px;
        background-color: whitesmoke;
        border-radius: 10px;
        box-shadow: 0px 2px 5px rgb(187, 182, 182);
        padding: 20px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .payment-box,
    .address-box {
        width: 800px;
        height: 200px;
        border: 2px solid brown;
        background-color: whitesmoke;
        border-radius: 10px;
        box-shadow: 0px 2px 5px rgb(187, 182, 182);
        padding: 20px 50px;
        display: flex;
        flex-direction: column;
        overflow: auto;
        align-items: center;
    }

    .payment-box {
        border: 2px solid orange;
    }

    .address-select-box {
        width: 700px;
        height: auto;
        margin: 10px 0;
        display: flex;
        align-items: center;
    }

    .button-box {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .address-radio-box {
        margin: 0 10px;
    }
    .address-title {
        display: flex;
        justify-content: center;
        margin-bottom: 8px;
    }

    .buy-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 50px;
        background-color: #f9d877;
        border-radius: 15px;
        cursor: pointer;
        box-shadow: 0px 2px 5px rgb(187, 182, 182);
        transition: 0.3s;
    }

    .buy-button:hover {
        background-color: #f5e1a7;
    }

    .buy-price {
        padding: 0 20px;
    }

    .buy-price > input {
        height: 40px;
        border-radius: 50px;
        outline: none;
        padding: 0px 15px;
        border: none;
        box-shadow: 0px 4px 10px #deded9;
        transition: 0.3s;
    }

    .lottie {
        width: 500px !important;
        height: 500px !important;
    }

    .lottie-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;
