import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UpcomingEvents() {
  const [event, setEvent] = useState([]);

  const URL = "https://elite-backend-1.herokuapp.com/api/events";

  useEffect(() => {
    const showEvents = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.data;
      const events = result.splice(0, 2);

      if (res.status === 200 && events.length > 0) {
        setTimeout(() => {
          setEvent(events);
        }, 1000);
      }
    };

    showEvents();
  }, []);
  return (
    <>
      {event && event.length > 0 ? (
        event.map((item, index) => {
          return (
            <figure
              key={index}
              className="md:flex md:flex-row flex-col max-w-4xl mx-auto rounded-md overflow-hidden figure"
              title={item.name}>
              <div className="w-full h-full">
                <img
                  className="w-full h-full object-center object-cover"
                  src={item.image.length > 0 ? item.image[1] : item.image[0]}
                  alt={item.name}
                />
              </div>
              <div className="flex flex-col items-center justify-center space-y-10 sm:pt-5 w-full h-auto p-5 backdrop-blur-md">
                <div className="text-white">
                  <h3 className="text-base">
                    {new Date(item.eventMonth).toLocaleString("default", {
                      dateStyle: "full",
                    })}
                  </h3>
                </div>
                <div className="flex flex-col items-center justify-center flex-wrap">
                  <p>
                    <Link
                      to={item._id}
                      className="md:text-2xl text-xl tracking-widest font-[700] uppercase text-white hover:text-pink-600 transition-all duration-500">
                      {item.name}
                    </Link>
                  </p>
                  <p className="uppercase tracking-widest text-center text-white mt-2 font-[500] lg:text-sm text-sm">
                    <span>{item.type}</span>
                  </p>
                </div>
                <div className="button">
                  <Link
                    to={item._id}
                    className="inline-block  text-white uppercase hover:text-gray-200 font-medium border-2 px-3 py-2 hover:border-gray-400 rounded-md transition-all duration-300 ease-in">
                    view Details
                  </Link>
                </div>
              </div>
            </figure>
          );
        })
      ) : (
        <>
          <div className="">{!event && "no event yet"}</div>
        </>
      )}
    </>
  );
}

export default UpcomingEvents;
