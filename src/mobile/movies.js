import React from "react";
import movie from "../mobileimages/romona.jpg"


const Movie = () => {
  return (
    <div >
        <img className="m-trend" src={movie}></img>
    </div>
  );
};

const MovieNew= ()=>{
    return <div className="m-trend-list">
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
          <Movie/>
    </div>
}

export default MovieNew;