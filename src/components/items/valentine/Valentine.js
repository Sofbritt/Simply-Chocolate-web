import React from "react";
import ItemProps from "../../props/item-props/ItemProps";
import './Valentine.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import SpanProps from "../../props/span-props/SpanProps";

export const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1100 },
        items: 3,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1100, min: 800 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function Item() {
    return (
        <div>
            <div>
                <SpanProps MainTitle="Valentine's Chocolates" />
            </div>
            
            <div className="item-div" >
                <Carousel showDots={true} responsive={responsive} className="slide" >

                    <ItemProps
                        itemImg='https://simplychocolatecph.com/cdn/shop/files/Heart_2_original_m.skygge_1000x1000_f7631798-f425-41d6-b9d3-22315d1ad188.png?v=1702140715&width=500'
                        ingridients='Mix chocolate bestsellers'
                        itemName='Premium Heartbox-Exclusive gift box with 40 bites'
                        price='349.00 amd'
                    />
                    <ItemProps
                        itemImg='https://simplychocolatecph.com/cdn/shop/files/YesYouCanBuyLove_sq_triocombo_1000_95ca80c2-56b5-4e2d-a7e1-236cb322b7a8.png?v=1698677656&width=500'
                        itemName='Yes you can buy love-Gift box with 3 box'
                        ingridients='Dark Marcy,Grainy Billy'
                        price='249.00 amd'
                    />
                    <ItemProps
                        itemImg='https://simplychocolatecph.com/cdn/shop/files/InsteadOfFlowers_sq_duocombo_1000_83043465-4864-4202-972c-f5896bb827a2.png?v=1698676096&width=500'
                        ingridients='Crispy Carry,Dark Marci'
                        itemName='Instead of flowers-Gift box 2 cubes'
                        price='169.00 amd'
                    />
                    <ItemProps 
                        itemImg='https://simplychocolatecph.com/cdn/shop/files/SinnersChoice_sq_triocombo_open_wBites_alt_1000.png?v=1707905346&width=500'
                        ingridients='Crispy Carry,Dark Marci'
                        itemName='Instead of flowers-Gift box 2 cubes'
                        price='169.00 amd'
                    />
                </Carousel>
            </div>

            <SpanProps MainTitle="It's all natural"
                LongSpan='At Simply, we use natural ingredients, and we go far beyond synthetic powder and artificial additives. You will therefore find no artificial sweeteners or preservatives in our chocolate. We are probably a bit picky when it comes to our ingredients. We only use the best that nature has available - taste and quality mean everything to us. Always. We spend a lot of time finding new and exciting flavors and we will go to great lengths for new innovative options, but we never compromise on good taste.'
            />

        </div>
    )
}

export default Item;