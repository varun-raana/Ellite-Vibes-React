import React from "react";
import EliteGamesHeader from "../../components/header/EliteGamesHeader";
import Navbar from "../../components/navbar/Navbar";
import EliteGamesTestimonials from "../../components/testimonial/EliteGamesTestimonials";
import EliteGamesGallery from "../../shared/EliteGamesGallery";
import Partners from "../../components/partners/Partners";
import UpcomingGamesEvents from "../../components/services/UpcomingGamesEvents";

function EliteGames() {
  return (
    <>
      <div className="h-[11.5vh] bg-white"></div>
      <Navbar />
      <EliteGamesHeader />
      <UpcomingGamesEvents />
      <div className=" bg-gray-100 ">
        <div className="py-16 bg-white tracking-[3px] w-full md:text-5xl text-4xl flex items-center justify-center text-center uppercase font-[800] text-blue-600">
          gallery
        </div>
        <div className="max-w-7xl mx-auto py-24 px-4">
          <EliteGamesGallery />
        </div>
      </div>
      <Partners />
      <div className="p-4 gameTestimonial" id="testimonials">
        <div className="max-w-[1340px] mx-auto py-24">
          <div className="items-end justify-between max-w-7xl mx-auto sm:flex">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl text-white">
              Read trusted reviews from our customers
            </h2>
          </div>
          <div className="mt-8 md:p-4">
            <EliteGamesTestimonials />
          </div>
        </div>
      </div>
    </>
  );
}

export default EliteGames;
