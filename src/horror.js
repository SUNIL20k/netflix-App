import React from "react";
import { ReactDOM } from "react";
import horror from "./images/651b3d13f1affa001d927a76.jpg"


const Horror=()=>{
    return <div>
        <img className="onnetflix-img" src={horror}></img>
    </div>
}

const HorrorList=()=>{
    return <div className="on">
            <Horror/>
            <Horror/>
            <Horror/>
            <Horror/>
            <Horror/>
            <Horror/>
            <Horror/>
            <Horror/>
            <Horror/>
            <Horror/>
            <Horror/>
    </div>
}
export default HorrorList;