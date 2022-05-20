import React from "react";
import { useLocation } from "react-router-dom";

function FollowUs() {
  const params = useLocation();

  return (
    <>
      <div className="flex items-center justify-center gap-5">
        <a
          href="https://www.facebook.com/EliteVibes-104309855303145"
          target="_blank"
          rel="noreferrer"
          className={`${
            params.pathname === "/elitegames"
              ? "text-blue-600"
              : " text-pink-600"
          } tracking-[2px] font-[700] p-2 `}>
          Facebook
        </a>
        <span className=" text-white">|</span>
        <a
          href={"https://www.instagram.com/elitevibesevent"}
          target="_blank"
          rel="noreferrer"
          className={`${
            params.pathname === "/elitegames"
              ? "text-blue-600"
              : " text-pink-600"
          } tracking-[2px] font-[700] p-2 `}>
          Instagram
        </a>
      </div>
    </>
  );
}

export default FollowUs;
