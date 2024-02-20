import React from "react";
import './ProductCount.css';

function ProductCount(props) {
    return (
        <div className="shop-count-select" >
            <div className="product-count" >
                <span>{props.ItemsCount} </span>
            </div>
            <hr className="select-hr" />
            <div>
                <select className="select" >
                    <option className="select-title" >Sort By</option>
                    <option className="option" >Featured</option>
                    <option className="option" >Best selling</option>
                    <option className="option" >Price,low to high</option>
                    <option className="option" >Price,high to low</option>
                    <option className="option" >Date,old to new</option>
                    <option className="option" >Date,new to old</option>
                    <option className="option" >Price,low to high</option>
                    <option className="option" >Price,high to low</option>
                    <option className="option" >Date,old to new</option>
                    <option className="option" >Date,new to old</option>
                </select>

            </div>

        </div>
    )
}

export default ProductCount;