import React from "react";
import './VeganProps.css';

function VeganProps(props) {
    return (

        <div className="vegan-imgs" >
         <a href="/see-vegan-selection" >
         <div>
                <h3 className="span-on-vegan-img" > {props.SpanOnImg} </h3>
                <a className="link-to-vegan" href="/see-vegan-selection" >See the selection</a>
                <img className="vegan-img" src={props.VeganImg} />

            </div>
         </a>
         
        </div>
    )
}

export default VeganProps;