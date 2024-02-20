import React from "react";
import Valentine from '../../components/items/valentine/Valentine';
import Gift from "../../components/items/gift-occasion/GiftOccasion";
import Inspiration from "../../components/items/inspiration/Inspiration";
import Cookie from "../../components/items/cookies/Cookie";
import VeganAd from "../../components/items/vegan-ad/VeganAd";
import AboutUs from "../../components/items/about-us/AboutUs";
import InstagramPart from "../../components/items/Instagram-part/InstagramPart";

function SimplyChocolate() {
    return (
        <div>
            <Valentine />
            <Gift />
            <Inspiration />
            <Cookie />
            <VeganAd />
            <AboutUs />
            <InstagramPart />
        </div>
    )
}

export default SimplyChocolate;