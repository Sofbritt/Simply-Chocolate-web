import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import ItemProps from "../../../../components/props/item-props/ItemProps";

export const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1100 },
        items: 4,
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

function Under100euro() {
    return (
        <div>
            <div className="gift-carousel" >
                <Carousel showDots={false} responsive={responsive} className="slide" >

                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Heart_2_original_m.skygge_1000x1000_f7631798-f425-41d6-b9d3-22315d1ad188.png?v=1702140715&width=500'
                        ingridients='Smag all 3 slags naturlige proteinbarer'
                        itemName='Protein Trial Bag'
                        price='89.00'
                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Premium50_1_m.skygge_1000x1000_6e1ef282-1005-4a1f-a956-6c8f58373be9.png?v=1702036673&width=500'
                        ingridients='Smag all 3 slags naturlige proteinbarer'
                        itemName='Protein Trial Bag'

                        price='89.00'
                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Bundle_DarkDarlings_sq_wBite_1000.png?v=1706709281&width=500'
                        ingridients='Smag all 3 slags naturlige proteinbarer'
                        itemName='Protein Trial Bag'

                        price='89.00'
                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Bundle_ProteinPack_sq_1000_726e3e6a-b285-4f8b-9b2d-c78da702e70d.png?v=1705409720&width=500'
                        ingridients='Smag all 3 slags naturlige proteinbarer'
                        itemName='Protein Trial Bag'

                        price='89.00'
                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/Bundle_ProteinPack_sq_1000_726e3e6a-b285-4f8b-9b2d-c78da702e70d.png?v=1705409720&width=500'
                        ingridients='Smag all 3 slags naturlige proteinbarer'
                        itemName='Protein Trial Bag'

                        price='89.00'
                    />
                </Carousel>
                <button className="gift-see-more-btn" >See more</button>
            </div>
        </div>
    )
}

export default Under100euro;