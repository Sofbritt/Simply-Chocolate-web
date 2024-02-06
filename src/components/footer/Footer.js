import React from "react";
import './Footer.css';
import { BsInstagram,BsFacebook  } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-each-list" >
                <div>
                    <h1>Say hello!</h1>

                    <ul className="footer-lists" >
                        <h3>digital@simplychocolate.dk</h3>
                        <h3>Simply Chocolate</h3>
                        <h3>Amager Landevej 123</h3>
                        <h3>2770 Kastrup</h3>
                        <h3><img src="https://simplychocolatecph.com/cdn/shop/t/73/assets/inspection.svg?v=55845598838141620741698744071" /> </h3>
                    </ul>
                    <ul className="footer-icons" >
                        <h3 className="each-icon" ><BsFacebook /> </h3>
                        <h3 className="each-icon" ><BsInstagram /> </h3>
                    </ul>
                    <ul className="footer-lists" >
                        <h3>© 2024 - Simply® Powered by Shopify</h3>
                    </ul>

                </div>
                <div>
                    <h1>Footer menu</h1>
                    <ul className="footer-lists" >
                        <h3>Search</h3>
                        <h3>Shipping and delivery</h3>
                        <h3>Inspection report</h3>
                        <h3>Cookies</h3>
                        <h3>Frequently asked questions</h3>
                        <h3>Kontakt</h3>
                        <h3>Abonnementspolitik</h3>
                    </ul>
                </div>
                <div>
                    <h1>Abou Simply</h1>
                    <ul className="footer-lists" >
                        <h3>About Us</h3>
                        <h3>All natural</h3>
                        <h3>Sustainability</h3>
                        <h3>Responsibility</h3>
                        <h3>Our team</h3>
                    </ul>
                </div>
                <div>
                    <h1>Shop</h1>
                    <ul className="footer-lists" >
                        <h3>Bars</h3>
                        <h3>Bites</h3>
                        <h3>Protein</h3>
                        <h3>Gift Boxes</h3>
                        <h3>Company Gifts</h3>
                        <h3>Christmas calendars</h3>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;