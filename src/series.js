import React from "react";
import { ReactDOM } from "react";
import series from "./images/Stranger-Things.jpg"


const Series=()=>{
    return <div>
        <img className="onnetflix-img" src={series}></img>
    </div>
}

const SeriesList=()=>{
    return <div className="on">
            <Series/>
            <Series/>
            <Series/>
            <Series/>
            <Series/>
            <Series/>
            <Series/>
            <Series/>
            <Series/>
            <Series/>
            <Series/>
    </div>
}
export default SeriesList;