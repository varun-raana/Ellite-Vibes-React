import Testimonials from "../../slides/Testimonials";

function VibesTestimonials() {
  return (
    <div>
      <section className="md:p-4">
        <div className="max-w-[1340px] mx-auto">
          <div className="items-end justify-between max-w-7xl mx-auto sm:flex">
            <h2 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl text-white">
              Read trusted reviews from our customers
            </h2>
          </div>

          <div className="mt-8 md:p-4">
            <Testimonials />
          </div>
        </div>
      </section>
    </div>
  );
}

export default VibesTestimonials;
