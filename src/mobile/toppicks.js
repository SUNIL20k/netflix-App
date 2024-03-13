import React from "react";
import toppicks from "../mobileimages/one piece red.jpg"


const TopPicks = () => {
  return (
    <div >
        <img className="m-trend" src={toppicks}></img>
    </div>
  );
};

const Top= ()=>{
    return <div className="m-trend-list">
          <TopPicks/>
          <TopPicks/>
          <TopPicks/>
          <TopPicks/>
          <TopPicks/>
          <TopPicks/>
          <TopPicks/>
    </div>
}

export default Top;