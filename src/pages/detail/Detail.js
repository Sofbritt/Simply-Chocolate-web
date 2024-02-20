import React from "react";
import './Detail.css';

function Detail() {
    return (
        <div className="detail-div" >
            <div className="detail-small-img-div" >
            <div>
               <img className="detail-small-img" src="https://simplychocolatecph.com/cdn/shop/files/SinnersChoice_sq_triocombo_open_wBites_alt_1000.png?v=1707905346&width=700" />
               </div>
               <div>
               <img className="detail-small-img" src="https://simplychocolatecph.com/cdn/shop/files/SinnersChoice_sq_triocombo_open_wBites_alt_1000.png?v=1707905346&width=700" />
               </div>
               <div>
               <img className="detail-small-img" src="https://simplychocolatecph.com/cdn/shop/files/SinnersChoice_sq_triocombo_open_wBites_alt_1000.png?v=1707905346&width=700" />
               </div>
               <div>
               <img className="detail-small-img" src="https://simplychocolatecph.com/cdn/shop/files/SinnersChoice_sq_triocombo_open_wBites_alt_1000.png?v=1707905346&width=700" />
               </div>
               <div>
               <img className="detail-small-img" src="https://simplychocolatecph.com/cdn/shop/files/SinnersChoice_sq_triocombo_open_wBites_alt_1000.png?v=1707905346&width=700" />
               </div>
               <div>
               <img className="detail-small-img" src="https://simplychocolatecph.com/cdn/shop/files/SinnersChoice_sq_triocombo_open_wBites_alt_1000.png?v=1707905346&width=700" />
               </div>

            </div>
            <div className="detail-img-div" >
                <img className="detail-img" src="https://simplychocolatecph.com/cdn/shop/files/SinnersChoice_sq_triocombo_open_wBites_alt_1000.png?v=1707905346&width=700" />
            </div>
            
            <div className="detail-information" >
              <div  className="detail-name-ingridients-price">
              <h3 >item name</h3>
                <h3 className="detail-ingridients" >item ingridients</h3>
                <h4 className="detail-price" >200 price</h4>
              </div>
                <button className="add-to-cart-btn" >Add to cart</button>
                <h4 className="detail-description" >
                Gift box with 3 Cubes
If you're going to sin a little, we recommend this exquisite combination of our three Easter favorites, Minty Cindy, Creamy Carol, and Grainy Sue. A perfect spring gift for someone you care about.

Minty Cindy - Premium dark chocolate with an inner layer of white chocolate with a subtle hint of fresh mint blended with matcha tea and crunch.
Creamy Carol - Soft homemade caramel and premium dark chocolate.
Grainy Sue - Peanuts, oats, caramel, and premium dark chocolate.
                </h4>
                <h4 className="detail-gram" >how many gram</h4>

            </div>
        </div>
    )
}

export default Detail;