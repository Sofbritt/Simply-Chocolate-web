import React from "react";
import ProductCount from "../../../components/props/product-count/ProductCount";
import ItemProps from "../../../components/props/item-props/ItemProps";

function ConfiramtionGifts() {
    return (
        <div>
            <ProductCount ItemsCount='4 Products' />
            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Konfirmand_SaltyFred_sq_bite_wBite_1000.png?v=1706186862&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Konfirmand_CrispyCarrie_sq_bite_wBite_1000.png?v=1706186293&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Konfirmand_PinkPolly_sq_bite_wBite_1000.png?v=1706186444&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
            </div>

            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Bite_FCK_wBite.png?v=1683203369&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />

            </div>
        </div>
    )
}

export default ConfiramtionGifts;