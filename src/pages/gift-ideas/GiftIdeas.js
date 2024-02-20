import React from "react";
import './GiftIdeas.css';
import SpanProps from "../../components/props/span-props/SpanProps";
import GiftItemProps from '../../components/props/gift-item-props/GiftItemProps'
import GiftGuide from "../../components/props/gift-guide/GiftGuide";
import SelectCarousel from "./select-carousel/SelectCarousel";
import AboutUsProps from "../../components/props/about-us-props/AboutUsProps";


function GiftIdeas() {

    return (
        <div>
            <SpanProps FirstSpan='Danish-produced chocolate'
                MainTitle='For every occasion'
                LongSpan='Is there anything better than surprising someone dear to you with a flavorful chocolate gift? Our skilled chocolatiers have curated an exclusive selection of natural chocolate in gift boxes. So, no matter the occasion, we have a tasty chocolate gift that fits perfectly.'

            />
            <div className="gift-item-div" >
                <GiftItemProps
                    GiftItemImg='https://simplychocolatecph.com/cdn/shop/files/Design_uden_navn_43.jpg?v=1703067926&width=500'
                    GiftItemTitle='For the birthday celebrant'
                    ItemDescriptions='Put a smile on the birthday persons face with a beautiful and festive chocolate gift filled with the finest premium bites. The gift that never needs to be exchanged!'
                    SeeMore='See more'
                />
                <GiftItemProps
                    GiftItemImg='https://simplychocolatecph.com/cdn/shop/files/Hjertebox_solo_1_1.png?v=1703067239&width=500'
                    GiftItemTitle='For Valentines Day'
                    ItemDescriptions='The big day of love - February 14th. Discover the beautiful novelty, The Heartbox, which will undoubtedly melt any heart.'
                    SeeMore='See more'
                />
                <GiftItemProps
                    GiftItemImg='https://simplychocolatecph.com/cdn/shop/files/Design_uden_navn_44.jpg?v=1703068054&width=500'
                    GiftItemTitle='For someone you hold dear'
                    ItemDescriptions='We just love just-because gifts. Those small thoughtful moments in everyday life when we remember to appreciate each other.'
                    SeeMore='See more'
                />
            </div>
            <div className="gift-item-div" >
                <GiftItemProps
                    GiftItemImg='https://simplychocolatecph.com/cdn/shop/files/Design_uden_navn_45.jpg?v=1703068171&width=500'
                    GiftItemTitle='For the hostess'
                    ItemDescriptions='Should the evenings host or hostess be pampered a little extra? Forget about the flowers. Surprise them with a premium chocolate gift.'
                    SeeMore='See more'
                />
                <GiftItemProps
                    GiftItemImg='https://simplychocolatecph.com/cdn/shop/files/Design_uden_navn_46.jpg?v=1703068956&width=500'
                    GiftItemTitle='For the anniversary celebration'
                    ItemDescriptions='Congratulations to the jubilee at the party with a gift that will undoubtedly stand out among the many flower bouquets.'
                    SeeMore='See more'
                />
                <GiftItemProps
                    GiftItemImg='https://simplychocolatecph.com/cdn/shop/files/Design_uden_navn_48.jpg?v=1703069152&width=500'
                    GiftItemTitle='For you and only you'
                    ItemDescriptions='Persian Perry, Cookie Joe, or Dark Marci? Amp up the self-indulgence and enjoy your favorite chocolates. You deserve it!'
                    SeeMore='See more'
                />
            </div>


            <GiftGuide GuideImg='https://simplychocolatecph.com/cdn/shop/files/Kvadrat_1_-_hygge.png?v=1703103499&width=500'
                OnImgPicture='https://simplychocolatecph.com/cdn/shop/files/Premium_box_m._kort_11.png?v=1703104704&width=500'
                title='Add a personal greeting 💌'
                GuideSpan='Make your chocolate gift extra personal with a message from you. Add a complimentary postcard at checkout, and we will send it along with your gift.'
                GuideTitle='Gift guide'
            />
            <SelectCarousel />

            <AboutUsProps Img='https://simplychocolatecph.com/cdn/shop/files/1500x1500_web_7.png?v=1698407225&width=500'
                NameOfAbout='Cocoa Horizons'
                Title='The taste of a clear conscience'
                About='At Simply, we take pride in being a part of the NGO Cocoa Horizons, which is dedicated to improving the lives of communities in the cocoa industry. As chocolate producers, we consider it an important duty to be conscious of our responsibility and, most importantly, to act accordingly. But for us, it is much more than a duty. We are 100% convinced that the taste of a clear conscience is the best of all varieties. It comes naturally to us to produce chocolate with responsibility for both people and nature. In fact, we believe you can actually taste it. Read here about our commitment to responsible cocoa production.'
            />
        </div>
    )
}

export default GiftIdeas;