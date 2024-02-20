import React from "react";
import './Search.css';
import { useState } from "react";

function Search() {

  
    return (
        <div>
           
            
                <div >
                    <h3>Search</h3>
                    <h4>No results could be found. Please try again with a different query.</h4>
                    <div><input className='search-inp' type="search" placeholder="Search for..." /></div>

                </div> 
           

           
        </div>
    )
}

export default Search;