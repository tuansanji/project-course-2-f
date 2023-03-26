import React from "react";

import WorldGaming from "./homeChild/worldGaming/WorldGaming";
import ReleasedGames from "./homeChild/releasedGames/ReleasedGames";
import JustForGamer from "./homeChild/justForGamer/JustForGamer";
import FeaturedGames from "./homeChild/featuredGames/FeaturedGames";

import "./home.scss";

function Home() {
  return (
    <div className="home">
      <WorldGaming />
      <ReleasedGames />
      <JustForGamer />
      <FeaturedGames />
    </div>
  );
}

export default Home;
