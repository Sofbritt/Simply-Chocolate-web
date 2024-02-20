import React from "react";
import './BusinessSolutions.css';
import Marquee from "../../components/marquee/Marquee";
import SpanProps from "../../components/props/span-props/SpanProps";

function BusinessSolutions() {
    return (
        <div>
            <SpanProps FirstSpan='Company Solutions'
                MainTitle='Your very own SIMPLY'
                Span='For gifts, meeting rooms, showrooms, webshop add-ons, etc. You decide the occasion - chocolate is always the answer.'
                LongSpan='We are here to help you find the right chocolate for your business. We even offer a customized solution for you with your own logo, and perhaps a company statement, added to our design.'
            />


            <SpanProps FirstSpan='Case'
                MainTitle='SIMPLY & FC COPENHAGEN'
                LongSpan='How we delivered a customized chocolate bar to the fans of the Park and home team FC Copenhagen.'
            />

            <div>
                <img src="https://simplychocolatecph.com/cdn/shop/files/Bar_FCKbar_wBite_ed86d025-6fd9-47d2-a096-d2f03590821c.png?v=1684927234&width=1000" />
            </div>
            <SpanProps MainTitle='We would love to talk about ideas and possibilities with you'
                LongSpan='We are only an email or phone call away. We are happy to help you find the best solution for your company or customers.'
            />
            <SpanProps Span='Contact our sales team today!'
                LongSpan='Email: sales@simplychocolate.dk'
            />
            <SpanProps LongSpan='  Phone: +45 33135622/36340070' />

        
            <div>
                <Marquee MarqueeText='CHOCOLATE WITH A TWIST OF HUMOR' />
            </div>
        </div>
    )
}

export default BusinessSolutions;