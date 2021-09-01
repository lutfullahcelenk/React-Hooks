import React from 'react';
import cw from "../assets/cw_logo.png"

const Header = () => {
    console.log("Rendering: Header Comp!")
    return (
        <div className="header">

            <img 
                src={img? img : cw}
                alt="CW Logo"
                style={{margin:"1rem", maxHeight:"200px"}}
            />

        </div>
    )
}

export default Header;
