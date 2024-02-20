import React from "react";
import ItemProps from "../../../components/props/item-props/ItemProps";
import ProductCount from "../../../components/props/product-count/ProductCount";

function ShopProtein() {
    return (
        <div>
            <ProductCount ItemsCount='6 Products' />

            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/FBkvadrat2024.png?v=1704966026&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/RichArnold_sq_bar_wBite_1000_cc51d6ad-ca89-41a3-ae86-3b484debae3e.png?v=1704965652&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/SixpackSally_sq_bar_wBite_1000_7767a52b-4c25-42be-a2f6-ade678543667.png?v=1704965705&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
            </div>

            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Gift_Drikkedunk_3cab6fb6-c470-4c67-b485-3ec2c90b3c11.png?v=1683204943&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Bundle_ProteinPack_sq_wBite_1000.png?v=1706189420&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/SpeedyTom_sq_bar_wBite_1000_12512268-7de5-473d-ae20-1e902fb916c4.png?v=1704965742&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
            </div>
            
        </div>
    )
}

export default ShopProtein;