import React from "react";
import './Footer.css';
import { BsInstagram, BsFacebook } from "react-icons/bs";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-each-list" >
                <div>
                    
                    <div className="footer-list-title" >  <h1>Say hello!</h1></div>

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
                    <div className="footer-list-title" ><h1>Footer menu</h1></div>
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
                    <div className="footer-list-title" > <h1>About Simply</h1></div>
                    <ul className="footer-lists" >

                        <a className="footer-link" href="/brand" ><h3>About Us</h3></a>
                        <h3>All natural</h3>
                        <h3>Sustainability</h3>
                        <h3>Responsibility</h3>
                        <h3>Our team</h3>
                    </ul>
                </div>

                <div>
                    <div className="footer-list-title" ><h1>Shop</h1></div>
                    <ul className="footer-lists" >
                        <a className="footer-link" href="/shop-bars" ><h3>Bars</h3></a> <br />
                        <a className="footer-link" href="/shop-protein" ><h3>Protein</h3></a> <br />
                        <a className="footer-link" href="/confirmation-gifts" ><h3>Company Gifts</h3></a>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;