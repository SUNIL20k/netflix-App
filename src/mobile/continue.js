import React from "react";
import anime from "../mobileimages/anime.jpg";

const Continue = () => {
  return (
    <div>
      <img className="m-trend" src={anime}></img>
      <div className="recent">
        <i class="bi bi-exclamation-circle"></i>
        <i class="bi bi-three-dots-vertical"></i>
      </div>
    </div>
  );
};

const ContinueWatch = () => {
  return (
    <div className="m-trend-list">
      <Continue />
      <Continue />
    </div>
  );
};

export default ContinueWatch;
