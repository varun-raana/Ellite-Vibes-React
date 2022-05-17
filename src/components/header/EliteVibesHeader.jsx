import React from "react";
import EliteVibesHeaderSlide from "../../slides/EliteVibesHeaderSlide";

function EliteVibesHeader() {
  return (
    <>
      <header className="h-full flex items-center justify-center w-full py-20 md:px-10 px-3 header ">
        <div className="flex lg:flex-row flex-col items-start justify-center h-full w-full backdrop-blur-sm  gap-5 rounded-md bg-white bg-opacity-5 md:mt-32 mt-10">
          <div className="flex lg:flex-row flex-col items-start justify-center gap-10 lg:h-[550px] h-full w-full py-10 md:p-10  p-3">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex flex-col items-center justify-start w-full h-full">
                <h1 className="md:text-7xl text-3xl font-[900] text-white capitalize tracking-widest">
                  elite vibes management company
                </h1>
                <p className=" leading-10 text-gray-400 tracking-wider font-[600] text-justify md:text-base text-sm mt-10">
                  We Specialize In Hosting Events All Across Pune City For All
                  Age Groups. Be It A Diwali Bash, Celebrity Concerts Or A
                  Private Party- We Assist You In Everything From Location
                  Selection, Decors, Invitation Cards To Event Emcee
                  Entertainers And Also Coordinating With Third Parties. You
                  Name It, We Got It All Covered For You!!
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center lg:justify-start justify-center w-full h-full overflow-hidden">
              <EliteVibesHeaderSlide />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default EliteVibesHeader;
