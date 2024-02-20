import React from "react";
import './GiftItemProps.css';

function GiftItemProps(props) {
    return (
        <div className="each-gift-item" >
          
                <img  className="gift-item-img" src={props.GiftItemImg} />
                <h3 className="gift-item-title" > {props.GiftItemTitle} </h3>
                <h3 className="gift-description" > {props.ItemDescriptions} </h3>
                <h3 className="gift-see-more" > {props.SeeMore} </h3>
          
        </div>
    )
}

export default GiftItemProps;