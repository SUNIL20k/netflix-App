import React from "react";
import { ReactDOM } from "react";
import anime from "./images/netflix-anime.jpg"


const Anime=()=>{
    return <div>
        <img className="onnetflix-img" src={anime}></img>
    </div>
}

const AnimeContainer=()=>{
    return <div className="on">
            <Anime/>
            <Anime/>
            <Anime/>
            <Anime/>
            <Anime/>
            <Anime/>
            <Anime/>
            <Anime/>
            <Anime/>
            <Anime/>
            <Anime/>
    </div>
}
export default AnimeContainer;