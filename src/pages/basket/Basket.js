import React from "react";
import './Basket.css';

function Basket() {
    return (
        <div>
            <div className="basket-div" >
                <h2 className="basket-title" >Cart</h2>
                <h3 className="basket-is-empty-span" >You cart is empty</h3>
                <button className="continue-shop-btn continue-shop-btn1" >Continue shopping</button>
            </div>
        </div>
    )
}

export default Basket;