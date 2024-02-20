import React from "react";
import ItemProps from "../../props/item-props/ItemProps";
import SpanProps from "../../props/span-props/SpanProps";

function Inspiration() {
    return (
        <div>
            <div>
                <SpanProps MainTitle='Inspiration' />
            </div>
            <div className="item-div" >

                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Premium50_1_m.skygge_1000x1000_6e1ef282-1005-4a1f-a956-6c8f58373be9.png?v=1702036673&width=500'
                    ingridients='Mix chocolate bestsellers'
                    itemName='Premium Heartbox-Exclusive gift box with 40 bites'
                    price='349 amd'
                />
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Heart_2_original_m.skygge_1000x1000_f7631798-f425-41d6-b9d3-22315d1ad188.png?v=1702140715&width=500'
                    ingridients='Mix chocolate bites'
                    itemName='Premium Heartbox-Exclusive gift box with 80 bites'
                    price='699 amd'
                />
                  <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Premium80_1_m.skygge_1000x1000_80d194f4-179f-4ac0-bdf3-3bb0d760d41c.png?v=1702028867&width=500'
                    ingridients='Mix chocolate bites'
                    itemName='Premium Heartbox-Exclusive gift box with 50 bites'
                    price='449 amd'
                />
            </div>
        </div>
    )
}

export default Inspiration;