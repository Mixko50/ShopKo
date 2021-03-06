import css from 'styled-jsx/css'

export default css`
            .login-box {
                width: 650px;
                height: 630px;
                box-shadow: 0px 7px 30px #deded9;
                background-color: rgb(250, 250, 250);
                border-radius: 50px;
                display: flex;
                flex-direction: column;
                align-items: center;
                overflow: auto;
            }

            .title {
                font-size: 25px;
                margin: 60px 0px 40px 0;
            }

            .login-form {
                width: 100%;
                max-width: 400px;
                padding: 0 40px;
            }

            .login {
                width: 100%;
                height: 100px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }

            .login > input {
                height: 45px;
                border-radius: 50px;
                outline: none;
                padding: 0px 15px;
                border: none;
               box-shadow: 0px 7px 30px #deded9;
               transition: .3s;
            }

            .login-button-box {
                display: flex;
                justify-content: center;
                 margin: 30px 0px;
            }

            .login-button{
                height: 60px;
                width: 160px;
                background-color: rgb(237,162,241);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 25px;
                font-size: 20px;
                transition: .3s;
                cursor: pointer;
            }

            .forgot {
                color: #a685e2;
                margin: 10px 0 10px 0;
            }

            .check{
                margin-top: 30px;
                display: flex;
                justify-content: center;
                color: red;
            }

            #login-check-name {
                border: 1px red solid;
            }

             #login-check-password {
                 border: 1px red solid;
             }

            .signup-button-box {
                display: flex;
                width: 100%;
                justify-content: center;
            }

            .signup-button {
                height: 40px;
                width: 100px;
                background-color: #bedcfa;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 15px;
                transition: .3s;
            }

            .login > input:focus {
                transform: translateY(-4px);
            }

            .login-button:hover {
                background-color: rgb(244, 122, 250);
            }

            .signup-button:hover {
                background-color: #91c0f0;
            }

            .forgot > a:hover {
                color: rgb(149, 71, 223);
            }

            #phone-login::-webkit-outer-spin-button , 
             #phone-login::-webkit-inner-spin-button{
                -webkit-appearance: none;
                 margin: 0;
            }

`;