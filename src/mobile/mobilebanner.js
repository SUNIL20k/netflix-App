import React from "react";
import { ReactDOM } from "react";
import m from "../mobileimages/banner2.jpg"

const MobileBanner=()=>{
    return <div className="m-banner">
        <div className="m-top-btn">
            <button>Tv Shows</button>
            <button>Movies</button>
            <button>Categories <i class="bi bi-chevron-down"></i></button>
        </div>
        <div className="m-banner-img">
            <img src={m}></img>
        </div>
        <div className="about">
            <ul>
                <li>Goofy</li>
                <li>Exciting</li>
                <li>Fantasy Anime</li>
                <li>Magic</li>
                <li>Japanese</li>
            </ul>
            <div className="banner-play">
                <button className="btn1">Play</button>
                <button className="btn2">My List</button>
            </div>
        </div>
    </div>
}

export default MobileBanner;