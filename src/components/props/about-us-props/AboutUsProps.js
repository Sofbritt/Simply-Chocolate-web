import React from "react";
import './AboutUsProps.css';

function AboutUsProps(props) {
    return (
        <div className="main-about-div" >
            <div> <img className="about-img" src={props.Img} /></div>
            <div className="about-us" >
                <h3 className="name-of-about" > {props.NameOfAbout} </h3>
                <h2 className="about-title" > {props.Title} </h2>
                <p className="about" >{props.About} </p>
            </div>
        </div>
    )
}

export default AboutUsProps;