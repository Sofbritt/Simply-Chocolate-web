import React from "react";
import GreenHouses from "./green-house/GreenHouses";
import { useState } from "react";
import SolarCells from "./solar-cells/SolarCells";
import Environment from "./enviroment/Enviroment";
import './buttons/Buttons.css';

function AboutUs() {
    const [block, setBlock] = useState(false)


    return (
        <div>

            {
                block === 'greenHouse' ?
                    <GreenHouses /> : ''
            }



            {
                block === 'Solar' ?
                    <SolarCells /> : ''
            }
            {
                block === 'Enviroment' ?
                    <Environment /> : ''
            }

            <div className="buttons" >
                <button className="btns" onClick={() => setBlock('greenHouse')}  >GreenHouse</button>
                <button className="btns" onClick={() => setBlock('Solar')}  >Solar Cells</button>
                <button className="btns" onClick={() => setBlock('Enviroment')} >Enviroment</button>
            </div>

        </div>
    )
}

export default AboutUs;