import React from "react";

function WhyChooseUs() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="text-center capitalize md:text-5xl text-4xl tracking-wider text-white font-medium">
          why choose us ?
        </div>
        <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3 mt-10">
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
              <h6 className="mt-4 font-medium leading-5 text-white tracking-wider">
                Event Designs
              </h6>
              <p className="mt-4 tracking-widest text-sm font-thin leading-8 text-gray-400 capitalize text-justify">
                we will provide you special designs based on the events and
                budgets which will help you to make your event successfully.
              </p>
            </div>
          </div>
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
              <h6 className="mt-4 font-medium leading-5 text-white tracking-wider">
                Sponsors Coordination
              </h6>
              <p className="mt-4 tracking-widest text-sm font-thin leading-8 text-gray-400 capitalize text-justify">
                We will provide sponser cooradination to our clients to organize
                event successfully.
              </p>
            </div>
          </div>
          <div className="p-8 border-b border-gray-800">
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
              <h6 className="mt-4 font-medium leading-5 text-white tracking-wider">
                Conferences and venue sourcing services
              </h6>
              <p className="mt-4 tracking-widest text-sm font-thin leading-8 text-gray-400 capitalize text-justify">
                we can work with you to create a unique conference identity with
                careful programming of content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
