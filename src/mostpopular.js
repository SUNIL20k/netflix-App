import React from "react";
import popular from "./images/Pacific-Rim-Uprising-—-Courtesy-of-Universal-Pictures.jpg"


const Popular=()=>{
    return <div>
        <img className="onnetflix-img" src={popular}></img>
    </div>
}

const MostPopular=()=>{
    return <div className="on">
            <Popular/>
            <Popular/>
            <Popular/>
            <Popular/>
            <Popular/>
            <Popular/>
            <Popular/>
            <Popular/>
            <Popular/>
            <Popular/>
            <Popular/>
    </div>
}
export default MostPopular;