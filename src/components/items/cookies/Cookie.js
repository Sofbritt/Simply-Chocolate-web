import React from "react";
import './Cookie.css';
import ItemProps from "../../props/item-props/ItemProps";
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

function Cookie() {
    return (
        <div>
            <div className="cookie-div" >
                <SpanProps
                    MainTitle='News:Cookie Joe'
                    Span='Cookie dough, chocolate chunks, and premium milk chocolate'
                    LongSpan="Our newest family member, Simply® Cookie Joe, has finally arrived! Encased in premium milk chocolate, you'll encounter a core of homemade cookie dough with chocolate chunks. Created for chocolate lovers seeking the perfect balance of creamy, sweet, and crispy.  "
                />


                <div className="item-div" >
                    <Carousel responsive={responsive} className="slide" >
                        <ItemProps
                            itemImg='https://simplychocolatecph.com/cdn/shop/files/CookieJoe_sq_bar_wBite_1000_442bdea6-c073-4495-ae8d-6ebebca85227.png?v=1702382815&width=500'
                            ingridients='Cookie dough,chocolate chunks and premium milk chocolate'
                            itemName='Cookie Joe'
                            price='349 amd'
                        />
                        <ItemProps
                            itemImg='https://simplychocolatecph.com/cdn/shop/files/CookieJoe_sq_cube_wBite_wChoco_1000.png?v=1696339065&width=500'
                            ingridients='Cookie dough,chocolate chunks and premium milk chocolate'
                            itemName='Cookie Joe'
                            price='349 amd'
                        />
                        <ItemProps
                            itemImg='https://simplychocolatecph.com/cdn/shop/files/CookieJoe_sq_bite_wBite_1000_b5d88062-e2fe-4fae-a5e6-dcb1ff4f2977.png?v=1699003104&width=500'
                            ingridients='Cookie dough,chocolate chunks and premium milk chocolate'
                            itemName='Cookie Joe'
                            price='349 amd'
                        />
                        <ItemProps
                            itemImg='https://simplychocolatecph.com/cdn/shop/files/SharingIsCaring_sq_duocombo_open_wBites_alt_1000.png?v=1707905303&width=500'
                            ingridients='Cookie dough,chocolate chunks and premium milk chocolate'
                            itemName='Cookie Joe'
                            price='349 amd'
                        />
                       
                    </Carousel>

                </div>
                <div>
                    <a href='/view-cookies' ><button className="view-btn view-btn1" >View all</button></a>
                </div>
            </div>
        </div>
    )
}

export default Cookie;