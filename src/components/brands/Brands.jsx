import React from "react";
import HomeBrands from "../../shared/HomeBrands";

function Brands() {
  return (
    <>
      <div className="md:py-20 py-12 brands" id="brands">
        <div className="flex  items-center justify-center lg:text-6xl font-[700] tracking-widest text-5xl text-center text-white text-opacity-70">
          Some of our Brands
        </div>
        <div className="mt-10 max-w-6xl mx-auto py-10">
          <HomeBrands />
        </div>
      </div>
    </>
  );
}

export default Brands;
