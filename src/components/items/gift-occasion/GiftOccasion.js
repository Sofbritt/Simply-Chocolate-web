import React from "react";
import ItemProps from "../../props/item-props/ItemProps";
import './GiftOccasion.css'

function Gift() {
    return (
        <div className="gift-occasion-div">
            <div>
                <span className="explore-gift" >Explore our gift guide below</span>
                <h2 className="title" >The gift for every occasion </h2>
                <a className="link" href="" >View the entire gift shop here</a>
            </div>
            <div className="item-div">
        
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Design_uden_navn_43.jpg?v=1703067926&width=500'
                    onImgSpan='For the birthday celebrate'
                    seeMoreBtn='See more'
                />

                <ItemProps title='sfgh'
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Design_uden_navn_45.jpg?v=1703068171&width=500'
                    onImgSpan='For the birthday celebrate'
                    seeMoreBtn='See more'
                />
                <ItemProps title='sfgh'
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Design_uden_navn_48.jpg?v=1703069152&width=500'
                    onImgSpan='For the birthday celebrate'
                    seeMoreBtn='See more'
                />

            </div>
        </div>
    )
}

export default Gift;