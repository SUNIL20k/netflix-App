import React, { useState } from "react";
import { ReactDOM } from "react";
import netflix from "./images/netflixname-removebg-preview.png";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleIconClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleInputClick = (e) => {
    e.stopPropagation(); 
  };

  return (
    <div className="navbar">
      <div className="nav-1">
        <div>
          <img className="netflix" src={netflix}></img>
        </div>
        <ul className="nav-list">
          <li className="nav-focus">Home</li>
          <li className="nav-focus">TV Shows</li>
          <li className="nav-focus">Movies</li>
          <li className="nav-focus">New & Popular</li>
          <li className="nav-focus">My List</li>
          <li className="nav-focus">Browse by Languages</li>
        </ul>
      </div>
      <div className="nav-2">
        <div onClick={handleIconClick}>
          {isExpanded ? (
            <input type="text" placeholder="Search" className="search" onClick={handleInputClick}/>
          ) : (
            <i class="bi bi-search"></i>
          )}
        </div>

        <i class="bi bi-bell"></i>
        <i class="bi bi-person-square"></i>
      </div>
    </div>
  );
};

export default Navbar;
