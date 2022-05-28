import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SingleGameSlide from "../../../slides/SingleGameSlide";

function Single() {
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const URL = "https://elite-backend-1.herokuapp.com/api/gameEvents/" + id;

  useEffect(() => {
    const showEvent = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.data;

      if (res.status === 200 && result) {
        setTimeout(() => {
          setEvent(result);
          setLoading(false);
        }, 1600);
      }
    };

    showEvent();
  }, [id, URL]);
  return (
    <>
      <SingleGameSlide />
      <div className="bg-gray-100 lg:p-5 p-3">
        {loading ? (
          <div className="max-w-7xl mx-auto w-full">
            <div>
              <button
                onClick={() => navigate(-1)}
                className=" mt-10 capitalize text-2xl text-blue-500 underline underline-offset-1 font-[800] tracking-widest">
                go back
              </button>
            </div>
            <div className="mt-10">
              <div className=" bg-blue-500 rounded-md animate-pulse bg-opacity-50 h-10 w-[450px]"></div>
              <p className="bg-blue-500 rounded-md animate-pulse bg-opacity-50 h-10 w-[250px] mt-4"></p>
            </div>
            <div className="bg-blue-500 rounded-md animate-pulse bg-opacity-50 h-10 w-[200px] mt-4"></div>
            <div className="mt-10 bg-blue-500 rounded-md animate-pulse bg-opacity-50 h-40 w-[900px] "></div>
            <div className="mt-8 text-gray-500 capitalize md:text-base text-sm tracking-[4px] font-[600]">
              don't have a ticket ? &nbsp;
              <button className="text-white bg-blue-700 border py-2 px-4 hover:outline-none outline-none capitalize text-base font-medium tracking-widest">
                register now
              </button>
            </div>
            <div className="mt-10 border">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-10 items-start justify-start  p-3 py-5">
                <div className=" flex flex-col items-start justify-start h-full p-4 w-full gap-5">
                  <strong className="uppercase text-gray-700 tracking-widest text-xl ">
                    details
                  </strong>
                  <div className="flex flex-col gap-3 w-full">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      date
                    </h1>
                    <p className="h-6 w-full bg-blue-500 rounded-md animate-pulse"></p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      time
                    </h1>
                    <p className="h-6 w-1/2 bg-blue-500 rounded-md animate-pulse"></p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      cost
                    </h1>
                    <p className="h-6 w-2/3 bg-blue-500 rounded-md animate-pulse"></p>
                  </div>
                </div>
                <div className=" flex flex-col items-start justify-start h-full p-4 w-full gap-5">
                  <strong className="uppercase text-gray-700 tracking-widest text-xl">
                    organizer
                  </strong>
                  <div className="flex flex-col gap-3 w-full">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      name
                    </h1>
                    <p className="h-6 w-2/4 bg-blue-500 rounded-md animate-pulse"></p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      phone
                    </h1>
                    <p className="h-6 w-2/3 bg-blue-500 rounded-md animate-pulse"></p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      email
                    </h1>
                    <p className="h-6 w-full bg-blue-500 rounded-md animate-pulse"></p>
                  </div>
                </div>
                <div className=" flex flex-col items-start justify-start b h-full p-4 w-full gap-5">
                  <strong className="uppercase text-gray-700 tracking-widest text-xl">
                    venue
                  </strong>
                  <div className="flex flex-col gap-3 w-full">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      phone
                    </h1>
                    <p className="h-6 w-2/3 bg-blue-500 rounded-md animate-pulse"></p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      address
                    </h1>
                    <p className="h-6 w-2/3 bg-blue-500 rounded-md animate-pulse"></p>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <p className="h-6 w-2/3 bg-blue-500 rounded-md animate-pulse"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto w-full">
            <div>
              <button
                onClick={() => navigate(-1)}
                className="mt-10 capitalize text-lg text-blue-600 font-[600] tracking-widest">
                go back
              </button>
            </div>
            <div className="mt-10">
              <h2 className="md:text-6xl text-4xl text-gray-700 tracking-widest font-[700] capitalize">
                {event.name}
              </h2>
              <p className="mt-4 md:text-sm text-xs text-blue-700 tracking-widest font-medium">
                <span>
                  {new Date(event.eventMonth).toLocaleString("default", {
                    dateStyle: "full",
                  })}
                  &nbsp; at &nbsp;
                  {new Date(event.eventMonth).toLocaleString("default", {
                    timeStyle: "medium",
                  })}
                </span>
              </p>
            </div>
            <div className="mt-4 md:text-xl text-sm font-medium text-gray-700 capitalize tracking-[3px]">
              ₹{event.cost} / per ticket
            </div>
            <div className="mt-10 text-gray-600 md:text-2xl text-sm font-[500] tracking-[2px] text-justify capitalize">
              {event.description}
            </div>
            <div className="mt-8 text-gray-500 capitalize md:text-base text-sm tracking-[4px] font-[600]">
              want to play ? &nbsp;
              <button className="text-white border py-2 px-4 hover:outline-none outline-none capitalize rounded text-base font-medium tracking-widest bg-blue-600">
                register now
              </button>
            </div>
            <div className="mt-10 border">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 gap-10 items-start justify-start  p-3 py-5">
                <div className=" flex flex-col items-start justify-start h-full p-4 w-full gap-5">
                  <strong className="uppercase text-gray-600 tracking-widest text-xl ">
                    details
                  </strong>
                  <div className="flex flex-col gap-3">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      date
                    </h1>
                    <p className="capitalize text-xs font-medium text-blue-700 tracking-[3px]">
                      {new Date(event.eventMonth).toLocaleString("default", {
                        dateStyle: "full",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      time
                    </h1>
                    <p className="capitalize text-xs font-medium text-blue-700 tracking-[3px]">
                      {new Date(event.eventMonth).toLocaleString("default", {
                        timeStyle: "short",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      cost
                    </h1>
                    <p className="capitalize text-xs font-medium text-blue-700 tracking-[3px]">
                      ₹{event.cost}
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col items-start justify-start h-full p-4 w-full gap-5">
                  <strong className="uppercase text-gray-600 tracking-widest text-xl">
                    organizer
                  </strong>
                  <div className="flex flex-col gap-3">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      name
                    </h1>
                    <p className="capitalize text-xs font-medium text-blue-700  tracking-[3px]">
                      {event.organizerName}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      phone
                    </h1>
                    <p className="capitalize text-xs font-medium text-blue-700  tracking-[3px]">
                      <a href={`tel:+91${event.organizerPhone}`}>
                        +91 {event.organizerPhone}
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      email
                    </h1>
                    <a
                      href={`mailto:${event.organizerEmail}`}
                      className="text-xs font-medium text-blue-700  hover:text-blue-700 duration-300 tracking-[3px]">
                      {event.organizerEmail}
                    </a>
                  </div>
                </div>
                <div className=" flex flex-col items-start justify-start b h-full p-4 w-full gap-5">
                  <strong className="uppercase text-gray-600 tracking-widest text-xl">
                    venue
                  </strong>
                  <div className="flex flex-col gap-3">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      phone
                    </h1>
                    <p className="capitalize text-xs font-medium text-blue-700  tracking-[3px]">
                      <a href={`tel:+91${event.venuePhone}`}>
                        +91 {event.venuePhone}
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="mt-1 font-semibold capitalize text-gray-700 tracking-widest">
                      address
                    </h1>
                    <p className="capitalize mt-2 text-xs tracking-[3px] font-bold text-blue-700 ">
                      {event.address}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link
                      to="/elitegames"
                      className="capitalize text-base font-medium text-gray-500 hover:text-blue-600 transition-all duration-500 ease-in hover:scale-95 tracking-[4px]">
                      view venue website
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Single;
