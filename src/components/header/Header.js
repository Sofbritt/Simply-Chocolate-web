import React from "react";
import './Header.css';
import { BsSearch, BsBag, BsXLg } from "react-icons/bs";
import MenuItem from "../props/menu/MenuItem";
import PremiumPart from "./premium-part/PremiumPart";
import { useState } from "react";



function Header() {
    const [openSearch, setOpenSearch] = useState(false)
    return (
        <div>
            <div className="free-ad" >
                <a href="ad" className="ad-link" >Free shipping in Denmark on purchases over DKK 400</a>
            </div>

            <div className="header" >
                <div className="header-menu" >
                    <div>
                        <a className="menu-links" href="/" ><span className="logo" >SIMPLY</span></a>
                    </div>

                    <div class="menu">
                        <div className="has-dropdown" >
                            <a href="/shop" className="menu-links" >
                                Shop
                            </a>
                            <div className="dropdown" >
                                <div className="list" >
                                    <a className="menu-links" href="/shop-bars" ><MenuItem title={['Bars ']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/Bundle_TastingPack_sq_1000.png?v=1698916978&width=315']} /></a>
                                    <a className="menu-links" href='/shop-cubes' ><MenuItem title={['Cubes']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/MintyCindy_sq_cube_dancing_wBite_1000.png?v=1700827052&width=315']} /></a>
                                    <a className="menu-links" href="/shop-protein" ><MenuItem title={['Protein']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/Bundle_ProteinPack_sq_1000.png?v=1703751353&width=315']} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="has-dropdown" >
                            <a href="/gift-ideas" className="menu-links" >
                                Gift Ideas
                            </a>
                            <div className="dropdown" >
                                <div className="list" >
                                    <a className="menu-links" href="/valentine-gifts" ><MenuItem title={['Valentines Gifts ']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/Heart_2_original_m.skygge_1000x1000_f7631798-f425-41d6-b9d3-22315d1ad188.png?v=1702140715&width=315']} /></a>
                                    <a className="menu-links" href='/confirmation-gifts' ><MenuItem title={['Confiramtion Gifts']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/Konfirmand_Mixed_Bites_sq_wBites_1000.png?v=1706186738&width=315']} /></a>
                                    <a className="menu-links" href="/hostess-gifts" ><MenuItem title={['Hostess Gifts']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/InsteadOfFlowers_sq_duocombo_1000_d45a4515-360e-4fec-bfc5-d3d936c9f20e.png?v=1700150626&width=315']} /></a>
                                </div>
                            </div>
                        </div>


                        <div className="has-dropdown" >
                            <a href="/brand" className="menu-links" >
                                Brand
                            </a>
                            <div className="dropdown" >
                                <div className="list" >
                                    <a className="menu-links" href="/brand" ><MenuItem title={['About Us']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/1500x1500_web_2.png?v=1698403880&width=315']} /></a>
                                    <a className="menu-links" href='/confirmation-gifts' ><MenuItem title={['Confiramtion Gifts']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/1500x1500_web_9.png?v=1698411438&width=315']} /></a>
                                    <a className="menu-links" href="/hostess-gifts" ><MenuItem title={['somt']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/Det_nye_Simply_-_FB_kvadrat_2.png?v=1698674131&width=315']} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown" >
                            <a className="menu-links" href="/business-solutions" ><ul>Business Solutions</ul></a>
                            <div className="business connections" >

                            </div>
                        </div>
                    </div>

                    <ul className="icons-div" >
                        <li className="header-icons" >

                            <a className="icon" >   <BsSearch onClick={() => setOpenSearch(true)} /></a>  <br />



                            <a href="/basket" className="icon" ><BsBag /> </a>
                        </li>
                    </ul>
                    {
                        openSearch === true ?

                            <div className="search-div" >
                                <div className="search-input-close" >

                                    <div className="input-div" >
                                        <BsSearch className="icon sec-search-icon " />
                                        <input className="search-input" type="search" placeholder="Search for..."
                                        />
                                    </div>
                                    <div> <h4 className="close-search" onClick={() => setOpenSearch(false)} > <BsXLg /> </h4></div>


                                </div>

                            </div> : ''
                    }

                </div>
                <PremiumPart
                    TitleOnBg='Premium Chocolate Gifts'
                    SpanOnImg='Treat your loved ones with handmade chocolate'
                    BgImg='https://simplychocolatecph.com/cdn/shop/files/Hero_Web_desk_2024_2.png?v=1706276336&width=1400'
                />
            </div>

        </div>
    )
}
export default Header;