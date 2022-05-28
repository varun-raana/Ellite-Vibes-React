import React from "react";
import SocialSwiper from "../../slides/SocialSwiper";

function Socials() {
  return (
    <section className="events">
      <div className="py-24">
        <div className="heading py-12 flex flex-col items-center justify-center">
          <h2 className="text-center text-white uppercase md:text-5xl text-4xl font-semibold tracking-widest">
            Socials
          </h2>
          <small className="text-white mt-5 capitalize text-lg tracking-widest font-extralight">
            stay informed with us
          </small>
        </div>
        <div className="max-w-6xl mx-auto lg:p-16 p-2">
          {/* <!-- Swiper --> */}
          <SocialSwiper />
        </div>
      </div>
    </section>
  );
}

export default Socials;
