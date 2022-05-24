import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UpcomingGamesEvents() {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = "https://elite-backend-1.herokuapp.com/api/gameEvents/";

  useEffect(() => {
    const showEvent = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.data;
      const singleEvent = result.splice(0, 1);

      if (res.status === 200) {
        setEvent(singleEvent);
        setTimeout(() => {
          setLoading(false);
        }, 1700);
      }
    };

    showEvent();
  }, []);

  return (
    <>
      {event &&
        event.map((item, index) => {
          return (
            <section
              key={index}
              className="overflow-hidden bg-gray-100"
              id="upcoming">
              <div className="uppercase font-[700] lg:text-5xl text-4xl py-16 bg-white text-center text-blue-700 ">
                <div>upcoming games events</div>
              </div>
              {loading ? (
                <div className="max-w-6xl mx-auto py-20 p-4">
                  <div className="upcoming-game-event mt-6">
                    <div className="event relative uppercase lg:text-2xl text-lg text-gray-700 font-[700] mt-10 tracking-[3px]">
                      <time className="h-10 w-full bg-gray-600 animate-pulse rounded-md"></time>
                    </div>
                    <article className="lg:flex items-center mt-10 md:gap-0 gap-3 w-full md:h-[370px] h-full">
                      <div className="flex flex-col items-start justify-center h-full w-full md:p-5 py-5">
                        <div className="h-7 w-full rounded-md animate-pulse bg-gradient-to-br from-gray-900 to-gray-600"></div>
                        <div className="h-7 w-[120px] animate-pulse bg-gray-800 mt-5"></div>
                        <p className="h-7 w-full animate-pulse bg-gray-800 mt-5"></p>
                        <div className="flex items-center justify-center gap-4 mt-7">
                          <Link
                            to=""
                            className="h-5 w-[130px] animate-pulse bg-blue-800"></Link>
                          <button className="h-5 w-[130px] animate-pulse bg-gray-800"></button>
                        </div>
                      </div>
                      <div className="w-full h-full bg-gray-800 animate-pulse"></div>
                    </article>
                  </div>
                </div>
              ) : (
                <div className="max-w-6xl mx-auto py-20 p-4">
                  <div className="upcoming-game-event mt-6">
                    <div className="event relative uppercase lg:text-2xl text-lg text-gray-700 font-[700] mt-10 tracking-[3px]">
                      <time>
                        {new Date(item.eventMonth).toLocaleString("default", {
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <article className="lg:flex items-center mt-10 md:gap-0 gap-3 w-full md:h-[370px] h-full">
                      <div className="flex flex-col items-start justify-center h-full w-full md:p-5 py-5">
                        <h2 className="md:text-5xl text-2xl tracking-widest text-gray-700 capitalize font-[700]">
                          {item.name}
                        </h2>
                        <small className="text-sm font-medium capitalize tracking-[3px] text-blue-800 mt-5">
                          {new Date(item.eventMonth).toLocaleString("default", {
                            dateStyle: "full",
                          })}
                        </small>
                        <p className="mt-7 tracking-wider text-justify text-md font-medium text-gray-600 capitalize">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-center gap-4 mt-7">
                          <a
                            href="./gameDetails.html"
                            className="mt-5 border py-2 inline-block px-4 outline-none justify-self-end bg-blue-700 text-white tracking-wider font-medium border-none transition-all duration-500 capitalize">
                            read more &nbsp;
                            <i className="fas fa-right-long"></i>
                          </a>
                          <button className="mt-5 border py-2 inline-block px-4 outline-none justify-self-end text-gray-700 border-gray-700 tracking-wider font-medium hover:text-blue-600 transition-all duration-500 capitalize">
                            register
                          </button>
                        </div>
                      </div>
                      <div className="w-full h-full">
                        <img
                          src={
                            item.image.length > 0
                              ? item.image[1]
                              : item.image[0]
                          }
                          className="h-full w-full block object-cover"
                          alt={item.name}
                          loading="lazy"
                        />
                      </div>
                    </article>
                  </div>
                </div>
              )}
            </section>
          );
        })}
    </>
  );
}

export default UpcomingGamesEvents;
