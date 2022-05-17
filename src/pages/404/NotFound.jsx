import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="fixed top-0 left-0 h-screen w-full bg-black z-[100] overflow-hidden flex items-center justify-center">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="max-w-6xl mx-auto  w-full flex flex-col items-center justify-center">
            <div className=" md:text-[260px] text-[120px] font-[900] relative text-amber-900 font-serif">
              Oops!
            </div>
            <div className="md:text-5xl text-lg font-[700] font-serif tracking-[3px] flex items-center justify-center text-amber-100  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full uppercase text-center">
              404 - page Not Found
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                onClick={() => navigate(-1)}
                className="md:text-xl text-xs font-[800] tracking-[2px] uppercase py-2 px-5 underline  inline-block  w-full text-amber-700 text-opacity-50 font-serif ">
                go back to previous page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
