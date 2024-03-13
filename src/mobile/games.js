import React from "react";
import game from "../mobileimages/netflix-games.png"


const Games=()=>{
    return <div>
        <img className="m-game" src={game}></img>
        <p className="m-game-name1">GTA Vice City</p>
        <p className="m-game-name2">Action</p>
    </div>
}
const GameList=()=>{
    return <div className="m-game-list">
        <Games/>
        <Games/>
        <Games/>
        <Games/>
        <Games/> 
        <Games/>
        <Games/>
        <Games/>
        <Games/> 
        <Games/>
        <Games/>  
    </div>
}

export default GameList;