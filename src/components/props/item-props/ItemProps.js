import React from "react";
import './ItemProps.css';

function ItemProps(props){
    return(
        <div >



    <div className="item-bg-gray" ><img src={props.itemImg} className="item-img" /></div>
    <span className="item-ingridients" > {props.ingridients} </span>
<h3 className="item-name" > {props.itemName} </h3>
<h3 className="price" > {props.price} </h3>
</div>
      
    )
}

export default ItemProps;