import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CallOfDuty from "../../img/call-of-duty-vanguard.jpg";
import CallOfDuty2 from "../../img/call-of-duty.png";
import Uncharted from "../../img/uncharted-movie-hero-banner-desktop-01-en-11feb22.jpg";
import Uncharted2 from "../../img/uncharted-movie-logo-01-11feb22$en.png";
import CyberPunk from "../../img/cyberpunk-2077.jpg";
import CyberPunk2 from "../../img/cyberpunk-2077-dark-logo-01-ps4-ps5-28jan22$en.png";
import GTA from "../../img/gta-1.jpg";
import GTA2 from "../../img/gta-5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade } from "swiper";

function EliteGamesHeader() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        centeredSlides={true}
        speed={1200}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper md:h-[550px] h-[450px] w-full object-cover relative">
        <div className="absolute bg-gradient-to-tr from-black to-transparent bottom-0 left-0 h-full w-full"></div>
        <SwiperSlide className="h-full w-full overflow-hidden">
          <img
            src={CallOfDuty}
            alt="call of duty"
            className="block w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute lg:top-1/3 lg:left-32 bottom-10 max-w-md mx-auto z-40 p-4">
            <div>
              <img
                className="block h-full w-full object-cover"
                src={CallOfDuty2}
                alt="call-of-duty-vanguard"
                loading="lazy"
              />
            </div>
            <div className="mt-3">
              <p className="text-white font-medium tracking-wider">
                Season Two brings heat with new multiplayer maps, new Zombies
                content, the introduction of armoured tanks, and more.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full overflow-hidden">
          <img
            src={Uncharted}
            alt="uncharted"
            className="w-full h-full object-cover"
            loading="lazy"
          />

          <div className=" absolute lg:top-1/3 lg:left-32 bottom-8 max-w-md mx-auto z-50 p-4">
            <div className=" mt-4">
              <img
                className="h-full w-full object-cover object-center"
                src={Uncharted2}
                alt="horizon-forbidden-west-white-logo-01-ps5-07may21"
                loading="lazy"
              />
            </div>
            <div className=" mt-3">
              <p className="text-white font-medium tracking-wider">
                Tom Holland and Mark Wahlberg race for the world's greatest
                treasure in the UNCHARTED movie.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full overflow-hidden">
          <img
            src={CyberPunk}
            alt="cyberpunk"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute lg:top-1/3 lg:left-32 bottom-10 max-w-md mx-auto z-30 p-4">
            <div>
              <img
                className="h-full w-full object-cover"
                src={CyberPunk2}
                alt="cyberpunk-2077-dark-logo-01-ps4-ps5-28jan22"
                loading="lazy"
              />
            </div>
            <div className="mt-3">
              <p className="text-white font-medium tracking-wider">
                Become the cyber-enhanced mercenary, V, and explore the
                futuristic world of Cyberpunk 2077, now enhanced for PlayStation
                5.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full w-full overflow-hidden">
          <img
            src={GTA}
            alt="gta-5"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute lg:top-1/3 lg:left-32 bottom-10 max-w-md mx-auto z-30 p-4">
            <div>
              <img
                className="h-full w-full object-cover"
                src={GTA2}
                loading="lazy"
                alt="gta-5"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default EliteGamesHeader;
