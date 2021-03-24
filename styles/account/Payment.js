import css from 'styled-jsx/css'

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
                border-bottom : 1px black solid;
            }

            .add-button{
                width: 100px;
                height: 50px;
                background-color: #ceadfe;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
            }

            .payment-setting-box {
                width: 100%;
                height: auto;
                border-bottom: 1px black solid;
            }

            .payment-setting {
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 20px 0;

            }

            .delete-payment {
                color: #6930c3;
            }
            
`;