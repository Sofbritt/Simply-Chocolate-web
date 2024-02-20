import React from "react";
import './SpanProps.css';

function SpanProps(props) {
    return (
        <div className="Span-div" >
            <h3 className="first-span" > {props.FirstSpan} </h3>
            <h2 className="main-title" > {props.MainTitle} </h2>
            <h3 className="span" > {props.Span} </h3>
            <h3 className="long-span" > {props.LongSpan} </h3>
        </div>
    )
}

export default SpanProps;