import React from "react";
import { BsInstagram } from "react-icons/bs";

function IntaImgsProps(props) {
    return (
        <div>
            <div className="insta-imgs" >
                <h3 className="insta-icon" ><BsInstagram/> </h3>
                <img className="each-insta-img"  src={props.img} />
            </div>
        </div>
    )
}

export default IntaImgsProps;