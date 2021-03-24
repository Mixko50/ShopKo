import React from 'react'
import Styles from '../../styles/home'


export const AdvertiseBox = () => {
    return (
        <div className="ads-box">
            <div className="free-shipping-promotion-box">
                <div className="free-shipping-1" />
                <div className="free-shipping-2" />
            </div>
            <div className="free-shipping-promotion-box">
                <div className="promotion" />
            </div>
            <style jsx>{Styles}</style>
        </div>
    )
}

