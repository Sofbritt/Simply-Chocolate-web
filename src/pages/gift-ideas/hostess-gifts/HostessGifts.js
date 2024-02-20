import React from "react";
import ProductCount from "../../../components/props/product-count/ProductCount";
import ItemProps from "../../../components/props/item-props/ItemProps";

function HostessGifts() {
    return (
        <div>
            <ProductCount ItemsCount='4 Products' />

            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/SinnersChoice_sq_triocombo_1000.png?v=1706699039&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/HeavenEggxist_sq_duocombo_1000.png?v=1706698010&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/FreshFromTheFarm_sq_duocombo_1000.png?v=1706698727&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
            </div>
            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/FreshFromTheFarm_sq_duocombo_1000.png?v=1706698727&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
            </div>

        </div>
    )
}

export default HostessGifts;