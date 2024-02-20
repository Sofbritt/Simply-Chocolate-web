import React from "react";
import ProductCount from "../../../components/props/product-count/ProductCount";
import ItemProps from "../../../components/props/item-props/ItemProps";

function ValentineGifts() {
    return (
        <div>
            <ProductCount ItemsCount='6' />
            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Heart_2_original_m.skygge_1000x1000_f7631798-f425-41d6-b9d3-22315d1ad188.png?v=1702140715&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/YesYouCanBuyLove_sq_triocombo_1000_95ca80c2-56b5-4e2d-a7e1-236cb322b7a8.png?v=1698677656&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/InsteadOfFlowers_sq_duocombo_1000_83043465-4864-4202-972c-f5896bb827a2.png?v=1698676096&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
            </div>
            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/19.png?v=1705999691&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/20.png?v=1705999662&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/18.png?v=1705999708&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
            </div>
        </div>
    )
}

export default ValentineGifts;