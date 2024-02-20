import React from "react";
import './GiftGuide.css';

function GiftGuide(props) {
    return (
        <div>
           <div className="guide-div" >
           <div className="guide-imgs" >
                <img className="first-guide-img" src={props.GuideImg} />
                <img className="sec-guide-img" src={props.OnImgPicture} />
            </div>
            <div className="guide-about" >
                <h2 className="guide-span-title" > {props.title} </h2>
                <p className="guide-span" > {props.GuideSpan} </p>
            </div>
           </div>
           <div className="select-carousele" >
            <h3 className="guide-title" > {props.GuideTitle} </h3>
            <h2> {props.SelectCarousel} </h2>
           </div>
        </div>
    )
}

export default GiftGuide;