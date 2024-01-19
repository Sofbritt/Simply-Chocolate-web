import React from "react";
import DropdownMenuItem from "./dropdown-menu/DropdownMenuItem";

const Dropdown = (props) => {
    const menuItem = props.menuItem ? props.menuItem.map((menu) =>
        <DropdownMenuItem title={menu} />
    ) : [];

    return (
        <div>
            <div className="dropdown-menu" >
                <div className="menu-types" >
                    <span>{props.title} </span>
                </div>
            </div>
            <div  >
                <div>
                    {menuItem}  <hr />
                </div>
            </div>
        </div>
    )
}

export default Dropdown;