import React from "react";
import unWind from "../../img/images.png";
import { useLocation } from "react-router-dom";

function Partners() {
  const location = useLocation();
  return (
    <>
      <div
        className={`py-10 p-4 ${
          location.pathname === "/elitegames" ? "bg-white" : "partners"
        } `}>
        <div className="max-w-7xl mx-auto md:py-10 p-5">
          <div
            className={`flex item-center justify-center md:text-5xl text-3xl text-center tracking-[2px] ${
              location.pathname === "/elitegames"
                ? "text-gray-600"
                : "text-white"
            } capitalize text-sm font-[700]`}>
            our collaborated partners
          </div>
          <div className="mt-20 flex items-center justify-center">
            <img src={unWind} alt="unwind" title="unwind" loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
