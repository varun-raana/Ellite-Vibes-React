import React from "react";
import unWind from "../../img/images.png";
function Partners() {
  return (
    <>
      <div className="py-10 p-4 partners">
        <div className="max-w-7xl mx-auto md:py-10 p-5">
          <div className="flex item-center justify-center md:text-5xl text-white capitalize text-sm font-[700]">
            our collaborated partners
          </div>
          <div className="mt-10 flex items-center justify-center">
            <img src={unWind} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
