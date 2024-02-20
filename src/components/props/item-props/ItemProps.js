import React from "react";
import './ItemProps.css';

function ItemProps(props) {
    return (
        <div>
                <div>
                    <div className="item-bg-gray" >
                        <h4 className="each-gift-span" > {props.onImgSpan} </h4>
                        <img src={props.itemImg} className="item-img" />

                    </div>
                    <h4 className="item-ingridients" > {props.ingridients} </h4>
                    <h3 className="item-name" > {props.itemName} </h3>
                    <h3 className="last-price" >{props.LastPrice} </h3>
                    <h3 className="price" > {props.price} </h3>
                </div>
           
        </div>

    )
}

export default ItemProps;