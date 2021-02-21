import React, { Fragment } from 'react'
import LayoutWithSideNav from '../../components/Layout/LayoutWithSideNav'


const address = () => {
    return (
        <Fragment>
            <LayoutWithSideNav>
                <div className="title">
                    <h1>Address Setting</h1>
                </div>
                <div className="add-button-box">
                    <a href="#"><div className="add-button">+ Add</div></a>
                </div>
                <div className="setting-box">
                    <div className="address-setting" >
                        <div>Name :</div>
                        <div>s</div>
                        <div>Address :</div>
                        <div><p className="address-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                        <div>Phone number :</div>
                        <div>s</div>
                    </div>
                    <div className="address-edit">
                        <a href="#"><h3>Edit</h3></a>
                        <a href="#"><h3>Delete</h3></a>
                    </div>
                </div>
                <div className="setting-box">
                    <div className="address-setting" >
                        <div>Name :</div>
                        <div>s</div>
                        <div>Address :</div>
                        <div><p className="address-detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
                        <div>Phone number :</div>
                        <div>s</div>
                    </div>
                    <div className="address-edit">
                        <a href="#"><h3>Edit</h3></a>
                        <a href="#"><h3>Delete</h3></a>
                    </div>
                </div>
                <div className="address-check">
                    <h2>Address not found!</h2>
                </div>
            </LayoutWithSideNav>

            <style jsx>{`
            
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
                background-color: aqua;
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
            
            `}</style>
        </Fragment>
    )
}

export default address
