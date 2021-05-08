import css from "styled-jsx/css";

export default css`
    section {
        width: 100%;
        height: 100%;
        padding-top: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .page-box {
        width: 100%;
        height: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }

    .product-box,
    .product-details-box {
        width: 100%;
        height: 500px;
        padding: 10px;
        border-radius: 15px;
        box-shadow: 0px 0px 10px rgb(212, 206, 206);
        background-color: rgb(250, 250, 250);
        display: flex;
    }

    .product-details-box {
        padding: 50px !important;
        margin: 40px 0;
        height: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
    }

    .product-pic {
        flex: 40%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .big-pic {
        width: 100%;
        height: 100%;
        background-color: black;
        border-radius: 10px;
        cursor: pointer;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .product-buy {
        flex: 60%;
        height: 100%;
        padding: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .product-sub-pic {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

    .product-sub-pic > img {
        border-radius: 10px;
        width: 24%;
        height: 100%;
        transition: 0.3s;
    }

    .product-sub-pic > img:hover {
        transform: translateY(-2px);
        cursor: pointer;
    }

    .product-title > h1 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .product-title {
        width: 100%;
        padding-left: 10px;
        margin-top: 20px;
        height: 100px;
        display: flex;
        justify-content: flex-start;
    }

    .product-price {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        color: orange;
        font-size: 20px;
    }

    .product-quantity {
        display: flex;
        width: 100%;
        margin-top: 20px;
        max-width: 200px;
        align-items: center;
        justify-content: space-around;
    }

    .product-buy > p {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    .product-details-title {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .product-details {
        margin-top: 50px;
    }

    .quantity-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
