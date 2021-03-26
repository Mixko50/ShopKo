import css from "styled-jsx/css";

export default css`
    section {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .max-width-box {
        margin-top: 60px;
        width: 100%;
        height: 100vh;
        max-width: 1200px;
        display: flex;
    }

    .sidebar {
        padding: 20px;
        width: 300px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #f8e5e4;
    }

    .content {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #fef0ef;
        padding: 50px 90px;
    }

    .pic-name {
        margin-top: 50px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .pic-name > h1 {
        margin-top: 10px;
        text-align: center;
        display: flex;
    }

    .menu-setting {
        margin-top: 40px;
        display: flex;
        align-items: center;
    }

    .menu-icon {
        width: 50px;
        display: flex;
        flex-direction: column;
        height: 200px;
        justify-content: space-around;
        align-items: center;
    }
    .menu-bar {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        width: 130px;
        height: 200px;
        justify-content: space-around;
    }

    .menu-bar > p {
        cursor: pointer;
    }

    .menu-icon > a {
        cursor: pointer;
    }

    .profile-pic {
        width: 124px;
        height: 124px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 100px;
    }
`;
