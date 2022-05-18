import EliteVibesHeader from "../../components/header/EliteVibesHeader";
import Navbar from "../../components/navbar/Navbar";
import VibesTestimonials from "../../components/testimonial/VibesTestimonials";
import UpcomingEvents from "../../components/upcoming/UpcomingEvents";
import Gallery from "../../shared/Gallery";

function EliteVibes() {
  return (
    <>
      <Navbar />
      <EliteVibesHeader />
      <div className="upcoming py-24 md:px-0 px-5 uppercase flex items-center justify-center md:text-4xl text-3xl tracking-widest font-[700] text-white">
        upcoming events
      </div>
      <div
        className="events h-full w-full py-24 p-3 flex flex-col gap-8 bg-fixed"
        id="upcoming">
        <UpcomingEvents />
      </div>
      <div className="upcoming py-24 md:px-0 px-5 uppercase flex items-center justify-center md:text-4xl text-3xl tracking-widest font-[700] text-white">
        Gallery
      </div>
      <div className="bg-gray-900 py-24 px-4 ">
        <div className="md:max-w-6xl mx-auto">
          <Gallery />
        </div>
      </div>
      <div className="bg-gray-900 py-24 px-4 testimonial">
        <VibesTestimonials />
      </div>
    </>
  );
}

export default EliteVibes;
