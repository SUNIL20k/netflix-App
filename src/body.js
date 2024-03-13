import React from "react";
import { ReactDOM } from "react";
import Banner from "./banner";
import On from "./onlyonnetflix";
import RecentWatched from "./recent";
import MostPopular from "./mostpopular";
import AnimeContainer from "./anime";
import SeriesList from "./series";
import HorrorList from "./horror";

const Body=()=>{
    return <div className="Body">
              <Banner/>
              <h1 className="heading">Only on Netflix</h1>
              <On/>
              <h1 className="heading">Continue Watching<i class="bi bi-chevron-right"></i></h1>
              <RecentWatched/>
              <h1 className="heading">Most Popular</h1>
              <MostPopular/>
              <h1 className="heading">Anime</h1>
              <AnimeContainer/>
              <h1 className="heading">Series</h1>
              <SeriesList/>
              <h1 className="heading">Horror</h1>
              <HorrorList/>
    </div>
}

export default Body; 