import React from "react";
import ProductCount from "../../components/props/product-count/ProductCount";
import ItemProps from "../../components/props/item-props/ItemProps";

function GlutenFree() {
    return (
        <div>
            <ProductCount ItemsCount='6 Products' />
            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Box_24_YesYouCanBuyLove_2f18fdd2-2bed-4a77-9409-fffe3b1c490e.png?v=1683207032&width=500'
                    ingridients='Bow with 24 pieces of chocolate'
                    itemName='Yes,You can buy love'
                    price='32,25'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Box_12_SunOfANutcracker.png?v=1688543108&width=500'
                    ingridients='Bow with 12 pieces of chocolate'
                    itemName='Son of a Nutcracker'
                    price='19,93'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Box_12_ThisIsMoreThanJustChocolate.png?v=1683205663&width=500'
                    ingridients='Bow with 12 pieces of chocolate'
                    itemName='More than just a chocolate'
                    price='19,95'

                />
            </div>
            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Box_12_ItsAChocolateMiracle.png?v=1692859495&width=500'
                    ingridients='Bow with 12 pieces of chocolate'
                    itemName="It's a miracle chocolate"
                    price='19,95'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Box_12_SharingIsCaring.png?v=1683205692&width=500'
                    ingridients='Bow with 12 pieces of chocolate'
                    itemName='Sharing is Caring'
                    price='19,93'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Box_12_InsteadOfFlowers_bf8b80b8-ef92-4f5c-9c16-cd984eb935a7.png?v=1683207137&width=500'
                    ingridients='Bow with 12 pieces of chocolate'
                    itemName='Intead of flowers'
                    price='19,95'

                />
            </div>
        </div>
    )
}

export default GlutenFree;