import React from "react";
import './Brand.css';
import GiftGuide from "../../components/props/gift-guide/GiftGuide";
import SpanProps from "../../components/props/span-props/SpanProps";
import ItemProps from "../../components/props/item-props/ItemProps";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import MarqueePart from "../../components/marquee/Marquee";
import AboutUsProps from "../../components/props/about-us-props/AboutUsProps";



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

function Brand() {
    return (
        <div>

            <SpanProps FirstSpan='About us'
                MainTitle='Danish Natural Chocolate'
                LongSpan='Since 2011, we have handcrafted award-winning chocolate with the best natural ingredients at our factory in the beautiful city of Copenhagen. From the harvest of the cocoa bean in the Ivory Coast - to the final chocolate bar on the shelfs, nature is our most important ally. We believe that the best taste experiences occurs when everything needless is cut away. That is why we avoid artificial additives. And it is exactely the natural, the simple and the authentic values that has inspired us to our philosophy Keep it Simply . A view of life with based on a simple premise that happiness often occurs in the uncomplicated things. Whether it is enjoying a good piece of chocolate, taking a break from the digital world or admiring a magical moment.'
            />

            <GiftGuide GuideImg='https://simplychocolatecph.com/cdn/shop/files/Det_nye_Simply_-_FB_kvadrat.png?v=1698667830&width=500'
                OnImgPicture='https://simplychocolatecph.com/cdn/shop/files/1500x1500_web_10.png?v=1698502701&width=500'
                title='Same Same but different'
                GuideSpan='If you have been part of our chocolate family for many years, you will quickly notice that something is not quite as usual. Simply Chocolate has become Simply. New name. New logo. New design. But the same unconditional love for natural chocolate, as always.

            Our new brand identity is a reflection and embracement our philosophy Keep it Simply. A reminder to make room for the simple, important moments that really matters. An approach to life that is expressed in everything we do. From the development of our chocolate recipes and the design of our packaging - to our daily life at the factory and not least our commitment to sustainability.'


            />
            <SpanProps FirstSpan='Natural Pleasure'
                MainTitle='Chocolate bars with premium chocolate'
            />

            <div className="brand-items" >
                <Carousel showDots={false} responsive={responsive} className="slide" >
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/MintyCindy_sq_bar_wBite_1000_c8b318b4-f5bb-45d8-9953-512ce7903ef1.png?v=1702047398&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/CookieJoe_sq_bar_wBite_1000_442bdea6-c073-4495-ae8d-6ebebca85227.png?v=1702382815&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/DarkMarci_sq_bar_wBite_1000_26a11e1e-00c6-46bf-af3d-86e6425ff441.png?v=1702043219&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/MintyCindy_sq_bar_wBite_1000_c8b318b4-f5bb-45d8-9953-512ce7903ef1.png?v=1702047398&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/MintyCindy_sq_bar_wBite_1000_c8b318b4-f5bb-45d8-9953-512ce7903ef1.png?v=1702047398&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/MintyCindy_sq_bar_wBite_1000_c8b318b4-f5bb-45d8-9953-512ce7903ef1.png?v=1702047398&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />

                </Carousel>
            </div>
            <MarqueePart
                MarqueeText="KEEP IT SIMPLY-NATURAL "
            />

            <GiftGuide
                title='It is all natural, always.'
                GuideSpan="  Nature is a big part of our DNA. Taste and quality means everything. We are proud to use the best natural ingredients, and we work to ensure that all of our packaging will be natural too. We use no additives, no aromas, no artificial sweeteners. Read more about our love for natural ingredients here."
                GuideImg='https://simplychocolatecph.com/cdn/shop/files/Nyt_theme_1500x1500_web_2.png?v=1698917828&width=500'
                OnImgPicture='https://simplychocolatecph.com/cdn/shop/files/Nyt_theme_1500x1500_web.png?v=1698917579&width=500'

            />

            <SpanProps FirstSpan='Give a taste experience as a gift'
                MainTitle='Cubes & chocolate boxes'
            />

            <div className="brand-items" >
                <Carousel showDots={false} responsive={responsive} className="slide" >
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/CookieJoe_sq_cube_wBite_wChoco_1000.png?v=1696339065&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/DarkMarci_sq_cube_dancing_wBite_wChoco_1000.png?v=1700826846&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/DarkMarci_sq_bar_wBite_1000_26a11e1e-00c6-46bf-af3d-86e6425ff441.png?v=1702043219&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/CrispyCarrie_sq_cube_dancing_wBite_wChoco_1000.png?v=1700826664&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/MintyCindy_sq_cube_dancing_wBite_wChoco_1000.png?v=1700827052&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />
                    <ItemProps itemImg='https://simplychocolatecph.com/cdn/shop/files/MintyCindy_sq_bar_wBite_1000_c8b318b4-f5bb-45d8-9953-512ce7903ef1.png?v=1702047398&width=500'
                        ingridients='Mint,Matcha Tes'
                        itemName='Minty Cindy'
                        price='100'

                    />

                </Carousel>
            </div>

            <AboutUsProps Img='https://simplychocolatecph.com/cdn/shop/files/1500x1500_web_7.png?v=1698407225&width=500'

                NameOfAbout='Cocoa Horizons'
                Title='More than just good taste'
                About='At Simply®, we are proud to be part of the NGO The Cocoa Horizons Foundation. An organization working passionately and purposefully to improve the lives of local communities in the cocoa industry. As a chocolate manufacturer, we consider it an important duty to be aware of our responsibilities and not least to act accordingly. But for us it is much more than a duty. We feel 100% convinced that the taste of good conscience is the best of all flavors. We find it natural to produce chocolate with responsibility for both people and nature. We actually think you can taste it. Read here about our commitment to a responsible cocoa production here .'
            />
        </div>
    )
}

export default Brand;