import React from "react";
import { ReactDOM } from "react";

const MobileFooter = () => {
  return (
    <div className="m-footer">
      <div className="foot">
        <div className="foot-1">
          <i class="bi bi-house-door-fill"></i>
          <p>Home</p>
        </div>
        <div className="foot-1">
          <i class="bi bi-controller"></i>
          <p>Games</p>
        </div>
        <div className="foot-1">
          <i class="bi bi-collection-play"></i>
          <p>New & Hot</p>
        </div>
        <div className="foot-1">
          <i class="bi bi-person-square"></i>
          <p>My Netflix</p>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
