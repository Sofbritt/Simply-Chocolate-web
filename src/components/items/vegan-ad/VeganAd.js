import React from "react";
import VeganProps from "../../props/vegan-props/VeganProps";
import GlutenFreeProps from "../../props/gluten-free-props/GlutenFreeProps";

function VeganAd() {
    return (
        <div className="vegan-ad-div" >
            <h4 className="vegan-span" >Looking for vegan or gluten-free chocolate?</h4>

            <div className="vegan-gluten-free-imgs">
               <div>
               <VeganProps VeganImg='https://simplychocolatecph.com/cdn/shop/files/Juleakrylbox_2.png?v=1698653497&width=800'
                    SpanOnImg='Vegan Chocolate'
                />
               </div>

               <div>
               <GlutenFreeProps
                    VeganImg='https://simplychocolatecph.com/cdn/shop/files/1500x1500_web_12.png?v=1698590537&width=800'
                    SpanOnImg='Gluten Free Chocolate'

                />
               </div>
            </div>
        </div>
    )
}

export default VeganAd;