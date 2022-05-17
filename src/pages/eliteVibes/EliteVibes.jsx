import EliteVibesHeader from "../../components/header/EliteVibesHeader";
import Navbar from "../../components/navbar/Navbar";
import UpcomingEvents from "../../components/upcoming/UpcomingEvents";

function EliteVibes() {
  return (
    <>
      <Navbar />
      <EliteVibesHeader />
      <div className="upcoming py-24 md:px-0 px-5 uppercase flex items-center justify-center text-4xl tracking-widest font-[700] text-white">
        upcoming events
      </div>
      <div
        className="events h-full w-full py-24 p-3 flex flex-col gap-8 bg-fixed"
        id="upcoming">
        <UpcomingEvents />
      </div>
    </>
  );
}

export default EliteVibes;
