import React from "react";

function Services() {
  return (
    <div>
      <div
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-20 "
        id="services">
        <div className="text-center capitalize md:text-5xl text-4xl tracking-wider text-white font-medium">
          services that we provided
        </div>
        <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          <div className="p-8 border-b sm:border-r border-gray-800">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-pink-600 sm:w-16 sm:h-16">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                  stroke="white"
                  viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg>
              </div>
              <h6 className="mt-4 font-medium leading-5 text-white tracking-wider capitalize">
                private parties
              </h6>
              <p className="mt-4 tracking-widest text-sm font-thin leading-8 text-gray-400 capitalize text-justify">
                We organise private parties for a limited group and bring along
                the best entertainers to make your day memorable and even more
                dazzling with the best DJs in town.
              </p>
            </div>
          </div>
          <div className="p-8 border-b lg:border-r border-gray-800">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-pink-600 sm:w-16 sm:h-16">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                  stroke="white"
                  viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg>
              </div>
              <h6 className="mt-4 font-medium leading-5 text-white tracking-wider capitalize">
                corperate events
              </h6>
              <p className="mt-4 tracking-widest text-sm font-thin leading-8 text-gray-400 capitalize text-justify">
                With the help of our in-house experts in event management, we
                ensure that all your company events are smoothly organized
                following all necessary company protocols and norms. Be it a
                team achievement success party, product launch or someone’s
                retirement party- WE ARE AT YOUR SERVICE.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-r lg:border-r-0 border-gray-800">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-pink-600 sm:w-16 sm:h-16">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                  stroke="white"
                  viewBox="0 0 52 52">
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg>
              </div>
              <h6 className="mt-4 font-medium leading-5 text-white tracking-wider capitalize">
                clubbing events and concerts
              </h6>
              <p className="mt-4 tracking-widest text-sm font-thin leading-8 text-gray-400 capitalize text-justify">
                Elite Vibes has collaborations with Slay City and Unwind where
                we regularly weekender parties, concerts, standups and festive
                events for the younger generation energizing them with our
                groovy music and lip-smacking food & drinks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
