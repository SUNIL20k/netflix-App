import React from "react";
import { ReactDOM } from "react";
import MobileBanner from "./mobilebanner";
import GameList from "./games";
import Trendy from "./trendnow";
import ContinueWatch from "./continue";
import MovieNew from "./movies";
import OnNetflix from "./onnetflix";
import Top from "./toppicks";

const MobileBody = () => {
  return (
    <div className="mobile-body">
      <MobileBanner />
      <h1 className="m-content-name">Continue Watching</h1>
      <ContinueWatch/>
      <h1 className="m-content-name">Trending Now</h1>
      <Trendy/>
      <h1 className="m-content-name">Mobile Games</h1>
      <GameList/>
      <h1 className="m-content-name">New Releases</h1>
      <MovieNew/>
      <h1 className="m-content-name">Only on Netflix</h1>
      <OnNetflix/>
      <h1 className="m-content-name">Top Picks For Admin</h1>
      <Top/>
    </div>
  );
};

export default MobileBody;
