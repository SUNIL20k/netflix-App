import React from "react";
import { ReactDOM } from "react";
import recent from "./images/dune.avif"


const Recent=()=>{
    return <div>
        <img className="onnetflix-img" src={recent}></img>
    </div>
}

const RecentWatched=()=>{
    return <div className="on">
            <Recent/>
            <Recent/>
            {/* <Recent/>
            <Recent/>        */}
    </div>
}
export default RecentWatched;