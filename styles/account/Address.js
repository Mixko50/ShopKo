import css from "styled-jsx/css";

export default css`
    .title {
        font-size: 30px;
        display: flex;
        height: 60px;
        justify-content: space-around;
    }
    .add-button-box {
        display: flex;
        width: 100%;
        height: 80px;
        justify-content: flex-end;
        border-bottom: 1px black solid;
    }

    .address-setting {
        padding: 20px 0px;
        display: grid;
        grid-template-columns: 150px 400px;
        grid-template-rows: repeat(3, 55px);
        grid-column-gap: 20px;
    }

    .setting-box {
        display: flex;
        border-bottom: 1px black solid;
        height: auto;
    }

    .add-button {
        width: 100px;
        height: 50px;
        background-color: #ceadfe;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 0px 8px rgb(197, 197, 195);
        transition: 0.3s;
    }

    .add-button:hover {
        background-color: #dbc8f7;
    }

    .address-setting > div:nth-child(odd) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .address-setting > div:nth-child(even) {
        display: flex;
        align-items: center;
    }

    .address-setting > div:nth-child(6) {
        align-items: unset;
    }

    .address-detail {
        height: auto;
        overflow: hidden;
        /* text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical; */ */
    }

    .address-edit {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #6930c3;
    }

    .address-check {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 1024px) {
        .setting-box {
            flex-direction: column;
            padding-bottom: 30px;
        }
    }
`;
