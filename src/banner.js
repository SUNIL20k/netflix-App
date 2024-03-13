import React from "react";
import { ReactDOM } from "react";
// import banner from "./images/net-banner.webp"
// import name from "./images/dunename-removebg-preview.png"
import name from "./images/banner-name2-removebg-preview.png"
import banner from "./images/banner-2.jpg"

const Banner=()=>{
    return <div className="Banner">
             <img className="banner-img" src={banner}></img>
             <div className="banner-info">
                <img src={name}></img>
                {/* <h2>#6 in Movies Today</h2> */}
                <p>It tells the story of Saitama, a superhero who can defeat any opponent with a single punch.He is bored by a lack of challenge and searches for a worthy opponent.</p>
                <div className="banner-btn">
                    <button className="banner-btn1"><i class="bi bi-play-fill"></i> Play</button>
                    <button className="banner-btn2"><i class="bi bi-exclamation-circle"></i> More info</button>
                </div>
             </div>
    </div>
}

export default Banner; 