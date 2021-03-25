import React from "react";
import Styles from "../../styles/home";

export const AdvertiseBox = () => {
    return (
        <div className="ads-box">
            <div className="free-shipping-promotion-box">
                <div className="free-shipping-1">Promotion!</div>
                <div className="free-shipping-2">Coming soon!</div>
            </div>
            <div className="free-shipping-promotion-box">
                <div className="promotion">
                    Free shipping code! -- Coming soon! --
                </div>
            </div>
            <style jsx>{Styles}</style>
        </div>
    );
};
