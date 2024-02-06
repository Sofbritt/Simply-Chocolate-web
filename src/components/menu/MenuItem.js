import React from "react";
import './MenuItem.css';

function MenuItem(props) {


    return (
        <div className="menu-items" >
            <div className="each-item" >

                <img className="menu-img" src={props.menuImg} /><br />
                <span className="menu-item-title" > {props.title}</span>
            </div>



        </div>
    )
}

export default MenuItem;