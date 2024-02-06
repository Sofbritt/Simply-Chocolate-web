import React from "react";
import ItemProps from "../../props/item-props/ItemProps";
import './Inspiration.css';

function Inspiration() {
    return (
        <div>
            <div>
            <h2 className="title" >Inspiration</h2>
            </div>
            <div className="item-div" >

                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Heart_2_original_m.skygge_1000x1000_f7631798-f425-41d6-b9d3-22315d1ad188.png?v=1702140715&width=500'
                    ingridients='Mix chocolate bestsellers'
                    itemName='Premium Heartbox-Exclusive gift box with 40 bites'
                    price='349 amd'
                />
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Heart_2_original_m.skygge_1000x1000_f7631798-f425-41d6-b9d3-22315d1ad188.png?v=1702140715&width=500'
                    ingridients='Mix chocolate bites'
                    itemName='Premium Heartbox-Exclusive gift box with 50 bites'
                    price='449 amd'
                />
                <ItemProps
                    itemImg='https://simplychocolatecph.com/cdn/shop/files/Heart_2_original_m.skygge_1000x1000_f7631798-f425-41d6-b9d3-22315d1ad188.png?v=1702140715&width=500'
                    ingridients='Mix chocolate bites'
                    itemName='Premium Heartbox-Exclusive gift box with 80 bites'
                    price='699 amd'
                />
            </div>
        </div>
    )
}

export default Inspiration;