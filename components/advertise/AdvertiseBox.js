import React from "react";
import Styles from "../../styles/home";

export const AdvertiseBox = () => {
    return (
        <div className="ads-box">
            <div className="free-shipping-promotion-box">
                <div className="free-shipping-1">Welcome!</div>
                <div className="free-shipping-2">To ShopKo</div>
            </div>
            <div className="free-shipping-promotion-box">
                <div className="promotion">
                    Free shipping code type "free50" only 20 codes!
                </div>
            </div>
            <style jsx>{Styles}</style>
        </div>
    );
};
