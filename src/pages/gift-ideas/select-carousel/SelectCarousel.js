import React from "react";
import { useState } from "react";
import Under10euro from "./under-10euro/Under10euro";
import Under35euro from "./under-35-euro/Under35euro";
import Under100euro from "./under-100-euro/Under100Euro";
import './carousel-btns/CarouselBtns.css';

function SelectCarousel() {
    const [block, setBlock] = useState(false)
    return (
        <div>
            <div className="select-carousel-btns" >
                <div> <h1 onClick={() => setBlock('1')} className="each-select-carousel-btn" >Under10Euro</h1></div>
                <div>                <h1 onClick={() => setBlock('2')} className="each-select-carousel-btn" >Under35Euro</h1></div>
                <div>                <h1 onClick={() => setBlock('3')} className="each-select-carousel-btn" >Under100Euro</h1></div>
            </div>
            {
                block === '1' ?
                    <Under10euro /> : ''
            }
            {
                block === '2' ?
                    <Under35euro /> : ''
            }
            {
                block === '3' ?
                    <Under100euro /> : ''
            }


        </div>
    )
}

export default SelectCarousel;