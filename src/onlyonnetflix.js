import React from "react";
import { ReactDOM } from "react";
import demon from "./images/DemonSlayerSeason41687161950123.jpg"


const OnNetflix=()=>{
    return <div>
        <img className="onnetflix-img" src={demon}></img>
    </div>
}

const On=()=>{
    return <div className="on">
            <OnNetflix/>
            <OnNetflix/>
            <OnNetflix/>
            <OnNetflix/>
            <OnNetflix/>
            <OnNetflix/>
            <OnNetflix/>
            <OnNetflix/>
            <OnNetflix/>
            <OnNetflix/>
            <OnNetflix/>
    </div>
}
export default On;