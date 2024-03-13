import React from "react";
import nimg from "../mobileimages/n-removebg-preview.png"

const MobileNavbar=()=>{
    return <div className="m-navbar">
            <img className="m-nav-img" src={nimg}></img>
            <i class="bi bi-search"></i>
    </div>
}

export default MobileNavbar;