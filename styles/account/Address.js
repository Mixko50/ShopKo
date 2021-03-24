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

            .address-setting {
                padding: 20px 0px;
                display: grid ;
                grid-template-columns: 150px 400px;
                grid-template-rows: repeat(3,55px);
                grid-column-gap: 20px;
            }

            .setting-box{
                display: flex;
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

            .address-setting > div:nth-child(odd) {
                display: flex;
                justify-content: flex-end;
                align-items: center;

            }

            .address-setting > div:nth-child(even){
                display: flex;
                align-items: center;
            }

            .address-setting > div:nth-child(4){
                align-items: unset;
            }

            .address-detail {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }

            .address-edit{
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
                display: none;
            }
`;