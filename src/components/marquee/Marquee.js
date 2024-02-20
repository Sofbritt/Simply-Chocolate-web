import React from "react";
import Marquee from "react-fast-marquee";
import './Marquee.css';

function MarqueePart(props) {
    return (
        <div>
            <h1 className="marquee-span" >      <Marquee>
                {/* CHOCOLATE WITH A TWIST OF HUMOR */}
                {props.MarqueeText}
            </Marquee></h1>
        </div>
    )
}

export default MarqueePart;