import css from "styled-jsx/css";

export default css`
    nav {
        z-index: 100;
        position: fixed;
        width: 100%;
        height: 60px;
        border-radius: 0px 0px 15px 15px;
        background-color: #f6f5f5;
        box-shadow: 0px 5px 10px #d3e0ea;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-box {
        width: 100%;
        max-width: 1280px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        display: flex;
        align-items: center;
    }

    .logo > img {
        width: 45px;
        cursor: pointer;
    }

    .logo > h1 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        margin-left: 20px;
        margin-top: 0;
        cursor: pointer;
    }

    .status {
        display: flex;
        align-items: center;
    }

    .status > p {
        display: none;
    }

    .status > a {
        text-decoration: none;
    }

    .svg-inline--fa {
        color: black;
        font-size: 30px;
    }

    .search > input {
        width: 30vw;
        padding: 7px 15px;
        border-radius: 30px;
        outline: none;
        margin-right: 20px;
        border: 3px #ea5e76 solid;
    }
    .profile-pic {
        width: 31px;
        height: 31px;
        border-radius: 30px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
    }
`;
