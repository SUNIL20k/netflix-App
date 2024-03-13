import React from "react";
import trend from "../mobileimages/series.jpg"


const TrendNow = () => {
  return (
    <div >
        <img className="m-trend" src={trend}></img>
    </div>
  );
};

const Trendy= ()=>{
    return <div className="m-trend-list">
          <TrendNow/>
          <TrendNow/>
          <TrendNow/>
          <TrendNow/>
          <TrendNow/>
          <TrendNow/>
          <TrendNow/>
    </div>
}

export default Trendy;
