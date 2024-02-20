import React from "react";
import './PremiumPart.css';


function PremiumPart(props) {
    return (
        <div>
            <img className="big-Bg-img" src={props.BgImg} />
            <div className="premium"  >

                <h1 className="big-title" >{props.TitleOnBg}</h1>
                <span className="about-natural"> {props.SpanOnImg} </span>
               

            </div>
            <div className="premium-btns" >
                <div><a href="/shop" ><button className="shop shop1" >Shop now</button></a></div>
                <div><a href="/learn" ><button className="learnBtn learnBtn1" >Learn more</button></a></div>
            </div>

        </div>
    )
}

export default PremiumPart;