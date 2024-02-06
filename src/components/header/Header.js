import React from "react";
import './Header.css';
import { BsSearch, BsBag } from "react-icons/bs";
import MenuItem from "../menu/MenuItem";

function Header() {
    return (
        <div>
            <div className="free-ad" >
                <a href="ad" className="ad-link" >Free shipping in Denmark on purchases over DKK 400</a>
            </div>

            <div className="header" >
                <div className="header-menu" >
                    <div>
                        <span className="logo" >SIMPLY</span>
                    </div>

                    <div class="menu">
                        <div className="dropdown" > <ul>Shop</ul>
                            <div className="list" >
                                <MenuItem title={['heelooo']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/Bundle_TastingPack_sq_1000.png?v=1698916978&width=315']} />
                                <MenuItem title={['babyy']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/Bundle_ProteinPack_sq_1000.png?v=1703751353&width=315']} />
                                <MenuItem title={['chocolatess']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/Premium80_1_m.skygge_1000x1000_80d194f4-179f-4ac0-bdf3-3bb0d760d41c.png?v=1702028867&width=315']} />
                            </div>
                        </div>
                        <div className="dropdown" > <ul>Gift Ideas</ul>
                            <div className="list" >
                                <MenuItem title={['Valentines Gifts ']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/Heart_2_original_m.skygge_1000x1000_f7631798-f425-41d6-b9d3-22315d1ad188.png?v=1702140715&width=315']} />
                                <MenuItem title={['Birthday Gifts']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/Konfirmand_Mixed_Bites_sq_wBites_1000.png?v=1706186738&width=315']} />
                                <MenuItem title={['Histess Gifts']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/InsteadOfFlowers_sq_duocombo_1000_d45a4515-360e-4fec-bfc5-d3d936c9f20e.png?v=1700150626&width=315']} />
                            </div>
                        </div>
                        <div className="dropdown" > <ul>Business Solutions</ul>
                            <div className="business connections" >

                            </div>
                        </div>
                        <div className="dropdown" > <ul>Brand</ul>
                            <div className="list" >
                                <MenuItem title={['About Us']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/1500x1500_web_2.png?v=1698403880&width=315']} />
                                <MenuItem title={['Sustainibility']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/1500x1500_web_9.png?v=1698411438&width=315']} />
                                <MenuItem title={['All natural']} menuImg={['https://simplychocolatecph.com/cdn/shop/files/Det_nye_Simply_-_FB_kvadrat_2.png?v=1698674131&width=315']} />
                            </div>
                        </div>
                    </div>

                    <ul className="search-div" >
                        <li className="header-icons" >
                            <a className="icon" >   <BsSearch /></a>  <br />
                            <a className="icon" ><BsBag /> </a>
                        </li>
                    </ul>
                </div>
                <div className="premium" >
                    <h1 className="big-title" >Premium Protein Bars</h1>
                    <span className="about-natural">Treat your loved ones with handmade chocolate a get a free gift!</span> <br />
                    <br />
                    <button className="shop shop1" >Shop now</button>

                </div>
            </div>

        </div>
    )
}
export default Header;