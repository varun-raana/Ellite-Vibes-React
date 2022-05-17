import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper";

function SocialSwiper() {
  const [event, setEvent] = useState([]);
  const [gameEvent, setGameEvent] = useState([]);
  // let headers = new Headers();
  // headers.append("Access-Control-Allow-Origin", "*");

  let URL = "https://elite-backend-1.herokuapp.com/api/events";
  let game_URL = "https://elite-backend-1.herokuapp.com/api/gameEvents";

  useEffect(() => {
    const showEvents = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.data;

      const singleEvent = result.splice(0, 1);

      if (res.status === 200 && result) {
        setTimeout(() => {
          setEvent(singleEvent);
        }, 1500);
      }
    };

    const showGameEvents = async () => {
      const response = await fetch(game_URL);
      const gameData = await response.json();
      const gameResult = gameData.data;

      const singleGameEvent = gameResult.splice(0, 1);

      if (response.status === 200 && gameResult) {
        setTimeout(() => {
          setGameEvent(singleGameEvent);
        }, 1500);
      }
    };

    showEvents();
    showGameEvents();
  }, [URL, game_URL]);

  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        spaceBetween={50}
        speed={5500}
        autoplay={{
          delay: 2800,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full h-full  overflow-hidden">
        {event &&
          event.map((item, index) => {
            return (
              <SwiperSlide key={index} className=" w-full h-full">
                <div>
                  <img
                    src={item.image.length > 0 ? item.image[1] : item.image[0]}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex flex-col items-start gap-2 p-3 shadow bg-white bg-opacity-10">
                    <h2 className="text-white font-semibold uppercase tracking-widest">
                      {item.name}
                    </h2>
                    <p className="text-sm font-medium text-white capitalize tracking-widest">
                      held at {item.address}
                    </p>
                    <p className="text-sm font-thin text-white capitalize tracking-widest">
                      <span className="text-sm">
                        at {new Date(item.eventMonth).toLocaleTimeString()} on
                        {new Date(item.eventMonth).toDateString()}
                      </span>
                    </p>
                    <p className="text-sm font-thin text-white  tracking-widest">
                      for more detail visit&nbsp;
                      <Link
                        to="eliteVibes"
                        className="text-blue-500 font-semibold capitalize">
                        upcoming section
                      </Link>
                      &nbsp; in elite vibes
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        {gameEvent &&
          gameEvent.map((item, index) => {
            return (
              <SwiperSlide className="overflow-hidden" key={index}>
                <div>
                  <img
                    src={item.image.length > 0 ? item.image[1] : item.image[0]}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="flex flex-col items-start gap-2 p-3 shadow bg-white bg-opacity-10">
                    <h2 className="text-white font-semibold uppercase tracking-widest">
                      {item.name}
                    </h2>
                    <p className="text-sm font-medium text-white capitalize tracking-widest">
                      held at {item.address}
                    </p>
                    <p className="text-sm font-thin text-white capitalize tracking-widest">
                      <span className="text-sm">
                        at {new Date(item.eventMonth).toLocaleTimeString()} on
                        {new Date(item.eventMonth).toDateString()}
                      </span>
                    </p>
                    <p className="text-sm font-thin text-white  tracking-widest">
                      for more detail visit&nbsp;
                      <Link
                        to="elitegames"
                        className="text-blue-500 font-semibold capitalize">
                        upcoming section
                      </Link>
                      &nbsp; in elite games
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

export default SocialSwiper;
