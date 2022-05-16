import React from "react";
import { Link } from "react-router-dom";
import eliteVibe from "../elitedata/elite vibes logo gold circle transperent.jpg";
import eliteGame from "../elitedata/elite gaming logo black.jpg";
import eliteDivine from "../elitedata/gaming divine.jpg";
import eliteGold from "../elitedata/gaming gold.jpg";

function HomeBrands() {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 md:py-8 md:px-5 px-3 items-center justify-center">
        <div className="h-full w-full ">
          <Link to={"/elitevibes"}>
            <img
              src={eliteVibe}
              className="h-full rounded-2xl w-full object-cover"
              alt="elite brands"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="h-full w-full">
          <Link to={"/elitegames"}>
            <img
              src={eliteGame}
              className="h-full rounded-2xl w-full object-cover"
              alt="elite brands"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="h-full w-full">
          <Link to={"/elitedivine"}>
            <img
              src={eliteDivine}
              className="h-full rounded-2xl w-full object-cover"
              alt="elite brands"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="h-full  overflow-hidden  w-full">
          <Link to={"/elitegold"}>
            <img
              src={eliteGold}
              className="h-full rounded-2xl overflow-hidden w-full object-cover"
              alt="elite brands"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default HomeBrands;
