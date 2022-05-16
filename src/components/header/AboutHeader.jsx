import React from "react";

function AboutHeader() {
  return (
    <>
      <header className="hero h-[70vh]">
        <div className="content flex flex-col items-center justify-center gap-3 h-full w-full lg:p-20">
          <h3 className="lg:text-6xl text-3xl text-center text-white font-[700] tracking-widest uppercase">
            about our company
          </h3>
          <small className="md:text-lg font-[500] text-sm text-center text-white mt-4 tracking-widest">
            Elite vibes event management company
          </small>
        </div>
      </header>
    </>
  );
}

export default AboutHeader;
