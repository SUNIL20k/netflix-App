import React from "react";
import money from "../mobileimages/berlin.jpg"


const On = () => {
  return (
    <div >
        <img className="m-Onnetflix" src={money}></img>
    </div>
  );
};

const OnNetflix= ()=>{
    return <div className="m-trend-list">
          <On/>
          <On/>
          <On/>
          <On/>
          <On/>
          <On/>
          <On/>
          <On/>
          <On/>
          <On/>
          <On/>
    </div>
}

export default OnNetflix;