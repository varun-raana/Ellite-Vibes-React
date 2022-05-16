import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="fixed top-0 left-0 h-screen w-full bg-gray-900 z-50 overflow-hidden overflow-y-hidden ">
        <div className="flex flex-col gap-5 items-center justify-center h-full">
          <h1 className="text-5xl font-[900] tracking-[3px] text-white text-opacity-10 capitalize">
            Not Found
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="text-2xl font-[500] tracking-[2px] text-pink-500 capitalize">
            ← go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
