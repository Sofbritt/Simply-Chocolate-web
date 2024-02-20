import React from "react";
import './Shop.css';
import { useState } from "react";
import ItemProps from "../../components/props/item-props/ItemProps";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import ProductCount from "../../components/props/product-count/ProductCount";


function Shop() {

    const [openCategories, setOpenCategories] = useState(false)

    return (
        <div>

            <ProductCount ItemsCount='12 Product' />
            <hr />

            <div className="shop-div" >
                <div>

                    <div>
                        <div className="title-arrows" >
                            <div> <h3 className="categories-title" >Categories</h3></div>
                            <div className="arrows-div" >
                                <h3 onClick={() => setOpenCategories(!openCategories)} ><BsArrowDownShort className="arrow" /> </h3>

                            </div>

                        </div>
                        {
                            openCategories ? <div className="categories-div" >
                                <div  >
                                   <h5> <a href="/shop-bars" className="menu-links categories"  >Bars</a></h5>
                                   <h5> <a href="/shop-cubes"className="menu-links  categories" >Cubes</a></h5>
                                    <h5><a href="/shop-protein" className="menu-links  categories" >Protein</a></h5>
                                   <h5> <a href="/shop-premium" className="menu-links  categories" >Premium</a></h5>
                                </div>
                            </div> : null
                        }


                    </div>
                </div>
                <div className="shop-products" >
                    <div>
                        <ItemProps ItemImg='https://simplychocolatecph.com/cdn/shop/files/Mixed_Solid_Bites_sq_wBites_1000_9ff780da-95fa-4913-88fe-2d26cc136230.png?v=1699003474&width=500'
                            ingridients='Cripsy Carry'
                            itemName='Solid Mix'
                            price='540'
                        />
                        <ItemProps ItemImg='https://simplychocolatecph.com/cdn/shop/files/Mixed_Solid_Bites_sq_wBites_1000_9ff780da-95fa-4913-88fe-2d26cc136230.png?v=1699003474&width=500'
                            ingridients='Cripsy Carry'
                            itemName='Solid Mix'
                            price='540'
                        />
                    </div>
                    <div>
                        <ItemProps ItemImg='https://simplychocolatecph.com/cdn/shop/files/Mixed_Solid_Bites_sq_wBites_1000_9ff780da-95fa-4913-88fe-2d26cc136230.png?v=1699003474&width=500'
                            ingridients='Cripsy Carry'
                            itemName='Solid Mix'
                            price='540'
                        />
                        <ItemProps ItemImg='https://simplychocolatecph.com/cdn/shop/files/Mixed_Solid_Bites_sq_wBites_1000_9ff780da-95fa-4913-88fe-2d26cc136230.png?v=1699003474&width=500'
                            ingridients='Cripsy Carry'
                            itemName='Solid Mix'
                            price='540'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;