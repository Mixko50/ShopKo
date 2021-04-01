import css from "styled-jsx/css";

export default css`
    .title {
        display: flex;
        height: 90px;
        justify-content: space-around;
        font-size: 30px;
        margin-bottom: 30px;
        border-bottom: 1px black solid;
    }

    .profile-setting {
        display: grid;
        grid-template-columns: 200px 550px;
        grid-template-rows: repeat(6, 60px);
        grid-column-gap: 20px;
    }

    .profile-setting > div:nth-child(2) > input:nth-child(2) {
        margin-left: 20px;
    }

    .left-grid {
        text-align: right;
    }

    .profile-setting > div:nth-child(odd) {
        text-align: right;
    }

    .edit {
        display: flex;
    }

    .edit-button {
        margin-left: 20px;
        color: #6930c3;
    }

    .profile-setting > div:nth-child(odd) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .profile-setting > div:nth-child(even) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .confirm-password {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 30px 0;
    }

    .confirm-cancel-button {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .confirm-button,
    .cancel-button {
        margin: 0px 10px;
        width: 120px;
        height: 50px;
        background-color: #16c79a;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
        box-shadow: 0px 5px 5px rgb(202, 195, 195);
    }

    .confirm-button:hover,
    .cancel-button:hover {
        transform: translateY(-3px);
    }

    .confirm-button:active,
    .cancel-button:active {
        transform: translateY(-3px);
    }

    .cancel-button {
        background-color: #f9d877;
    }

    input {
        width: 250px;
        height: 35px;
        padding-left: 10px;
        outline: none;
        border: 2px #cc85b1 solid;
        border-radius: 10px;
    }
`;
