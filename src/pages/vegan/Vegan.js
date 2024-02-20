import React from "react";
import ProductCount from "../../components/props/product-count/ProductCount";
import ItemProps from "../../components/props/item-props/ItemProps";

function Vegan() {
    return (
        <div>
            <ProductCount ItemsCount='6 Products' />
            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/SaltyFred_sq_sharingbar_open_1000_14e67c27-fa70-46c0-8950-f70a3aab9f54.png?v=1699002247&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/DarkMarci_sq_bite_wBite_1000_f75328be-b4ff-4ead-8b9e-a2db7001f5d7.png?v=1699003205&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/SaltyFred_sq_bite_wBite_1000_277bb850-f21d-47c6-925e-4a173c0ddb30.png?v=1699003440&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
            </div>
            <div className="item-div" >
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/TrueLove_sq_bite_wBite_1000.png?v=1707907782&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Bite_LoveBite_wBite.png?v=1683203624&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
                <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/MoccaMolly_sq_bite_wBite_1000_5cc25777-12f3-4e32-bd69-6dcfd9ae647e.png?v=1699003333&width=500'
                    ingridients='Mint,Matcha tea,crisp'
                    itemName='Minty Cindy'
                    price='From 24'

                />
            </div>
        </div>
    )
}

export default Vegan;