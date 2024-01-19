import React from "react";
import ItemProps from "../../props/item-props/ItemProps";
import './AllNatural.css';

function Item() {
    return (
        <div>
            <h2>Get a 500 ml. drinking bottle with a purchase of 400 DKK.</h2>
            <div className="item-div">
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/FBkvadrat2024.png?v=1704966026&width=500'
                    ingridients='cacao,ccc'
                    itemName='fghjn'
                    price='200'
                />
                <ItemProps title='sfgh'
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/FBkvadrat2024.png?v=1704966026&width=500'
                    itemName='fghjn'
                    ingridients='cacao,ccc'

                    price='200'
                />
                <ItemProps title='sfgh'
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/FBkvadrat2024.png?v=1704966026&width=500'
                    ingridients='cacao,ccc'
                    itemName='fghjn'
                    price='200'
                />

            </div>
        </div>
    )
}

export default Item;