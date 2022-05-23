import EliteGamesHeader from "../../components/header/EliteGamesHeader";
import Navbar from "../../components/navbar/Navbar";
import EliteGamesTestimonials from "../../components/testimonial/EliteGamesTestimonials";
import EliteGamesGallery from "../../shared/EliteGamesGallery";
import Partners from "../../components/partners/Partners";
import UpcomingGamesEvents from "../../components/services/UpcomingGamesEvents";
import Products from "../../components/products/Products";

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
      <div className="py-24">
        <div className="flex items-center justify-center md:text-6xl text-4xl text-gray-700 text-center capitalize tracking-wider font-[600]">
          our products
        </div>
        <div className="mt-4 text-sm capitalize font-[600] text-blue-600 tracking-[2px] flex items-center justify-center text-center">
          buy special discount products from here
        </div>
        <div className="mt-10">
          <Products />
        </div>
      </div>
    </>
  );
}

export default EliteGames;
