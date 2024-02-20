import React from "react";
import ItemProps from "../../components/props/item-props/ItemProps";
import ProductCount from "../../components/props/product-count/ProductCount";

function ViewCookies() {
    return (
        <div>
            <ProductCount ItemsCount='4 Products' />

            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/CookieJoe_sq_bar_wBite_1000_442bdea6-c073-4495-ae8d-6ebebca85227.png?v=1702382815&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/CookieJoe_sq_cube_wBite_wChoco_1000.png?v=1696339065&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/CookieJoe_sq_bite_wBite_1000_b5d88062-e2fe-4fae-a5e6-dcb1ff4f2977.png?v=1699003104&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
            </div>

            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/CookieJoe_sq_bite_wBite_1000_b5d88062-e2fe-4fae-a5e6-dcb1ff4f2977.png?v=1699003104&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
            </div>
            
        </div>
    )
}

export default ViewCookies;