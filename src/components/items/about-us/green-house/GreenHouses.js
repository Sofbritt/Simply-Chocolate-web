import React from "react";
import './GreenHouses.css';
import AboutUsProps from "../../../props/about-us-props/AboutUsProps";
import { useState } from "react";


function GreenHouses() {
    const [Greenhouses, setGreenhouses] = useState(false)


    return (
        <div>
            <div>
                <AboutUsProps
                    Img='https://simplychocolatecph.com/cdn/shop/files/AY7A9693.jpg?v=1631780793&width=600'
                    NameOfAbout='Project greenhouse'
                    Title='Our friends in Africa'
                    About='In a greenhouse at a cocoa plantation near San Pédro in Ivory Coast, a group of local women grow vegetables and fruit in a greenhouse. It is not possible to grow vegetables and fruit in that area, due to soil conditions, lack of water and the heat. But with our greenhouse, the right soil and water supply, we have contributed to a nutritious future
              for our cocoa farmers and their families.'
                />


              
            </div>

        </div>
    )
}


export default GreenHouses;