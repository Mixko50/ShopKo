import css from 'styled-jsx/css'

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
                margin: 30px 0;
                display:flex ;
                flex-direction: column;
                width: 90%;
                height: auto;
                background-color: whitesmoke;
                border-radius: 15px;
                box-shadow: 0px 2px 5px rgb(187, 182, 182);
            }

            .order-number, .total {
                 align-items: center;
                padding: 10px 30px;
                display: flex;
                width: 100%;
                height: 50px;
                border-bottom: 1px rgb(177, 174, 174) solid;
                justify-content: space-between;
            }
            
            .order {
                padding: 10px;
                display: flex;
                width: 100%;
                height: auto;
                border-bottom: 1px rgb(177, 174, 174) solid;
            }

            .total {
                padding: 10px;
                display: flex;
                width: 100%;
                height: 50px;
                padding: 10px 20px;
                align-items: center;
            }

            .suborder-box{
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

            .order-price{
                flex: 2;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .order-price > h1 {
                color: rgb(175, 117, 10);
            }

            .total {
                border: none;
                padding: 0 40px;
            }
            
           
            `;