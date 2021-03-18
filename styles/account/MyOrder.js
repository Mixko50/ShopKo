import css from 'styled-jsx/css'

export default css`
            
            .title {
                 font-size: 30px;
                display: flex;
                height: 60px;
                justify-content: space-around;
            }
            
            .order-bigbox {
                display: flex;
                width: 100%;
                justify-content: center;
            }

            .order-box {
                margin: 50px 0;
                display:flex ;
                flex-direction: column;
                width: 90%;
                height: 250px;
                background-color: whitesmoke;
                border: 1px black solid;
                border-radius: 20px;
            }

            .order-number {
                 align-items: center;
                padding: 10px 20px;
                display: flex;
                width: 100%;
                height: 50px;
                border-bottom: 1px black solid;
            }
            
            .order {
                padding: 10px;
                display: flex;
                width: 100%;
                height: 150px;
                border-bottom: 1px black solid;
            }

            .total {
                padding: 10px;
                display: flex;
                width: 100%;
                height: 50px;
                padding: 10px 20px;
                align-items: center;
            }
            
           
            `;