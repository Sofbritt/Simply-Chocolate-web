import React from "react";
import './Header.css';
import { BsSearch, BsBag } from "react-icons/bs";
import MenuItem from "../menu/MenuItem";

function Header() {
    return (
        <div>
            <div className="free-ad" >
                <a href="ad" className="ad-link" >free shipping in Denmark</a>
            </div>

            <div className="header" >
                <div className="header-menu" >
                    <div>
                        <span className="logo" >SIMPLY</span>
                    </div>

                  
                    <ul className="menu" >
                        <li> <a><MenuItem name='namee'title={['sss','fg']} menuItems= {['menu','menu2']} /> </a></li>
                    </ul>


                    <ul className="search-div" >
                        <li className="header-icons" >
                            <a className="icon" >   <BsSearch /></a>  <br />
                            <a className="icon" ><BsBag /> </a>
                        </li>
                    </ul>
                </div>
                <div className="premium" >
                    <h1 className="big-title" >Premium Protein Bars</h1>
                    <span className="about-natural">Natural ingridiens,25% protein and no artifical sweeteners</span> <br />
                    <br />
                    <button className="header-button  shop " >Shop now</button>
                    <button className="header-button learn " >Learn more</button>

                </div>
            </div>

        </div>
    )
}
export default Header;