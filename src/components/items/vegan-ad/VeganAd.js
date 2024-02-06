import React from "react";
import './VeganAd.css';

function VeganAd() {
    return (
        <div className="vegan-ad-div" >
            <h4 className="vegan-span" >Looking for vegan or gluten-free chocolate?</h4>
            <div className="vegan-imgs" >
                <div>
                    <img className="vegan-img" src="https://simplychocolatecph.com/cdn/shop/files/Juleakrylbox_2.png?v=1698653497&width=800" />
                </div>
                <div>
                    <img className="vegan-img" src="https://simplychocolatecph.com/cdn/shop/files/1500x1500_web_12.png?v=1698590537&width=800" />
                </div>
            </div>
        </div>
    )
}

export default VeganAd;