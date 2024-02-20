import React from "react";
import './GlutenFreeProps.css';

function GlutenFreeProps(props) {
    return (
        <div className="gluten-free-imgs" >
            <a href="/see-gluten-free-seleciton" >
                <div >
                    <h3 className="span-on-gluten-free-img" > {props.SpanOnImg} </h3>
                    <a className="link-to-gluten-free" href="/see-gluten-free-seleciton" >See the selection</a>
                    <img className="gluten-free-img" src={props.VeganImg} />

                </div>
            </a>

        </div>
    )
}

export default GlutenFreeProps;