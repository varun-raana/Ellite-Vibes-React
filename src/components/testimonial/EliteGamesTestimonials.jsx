import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

function EliteGamesTestimonials() {
  const [test, setTest] = useState([]);

  const GameURL =
    "https://elite-backend-1.herokuapp.com/api/elitegames/testimonials";

  useEffect(() => {
    const showTestimonial = async () => {
      const res = await fetch(GameURL);
      const data = await res.json();
      const result = data.data;
      const tests = result.splice(0, 6);
      if (res.status === 200) {
        setTest(tests);
      }
    };

    showTestimonial();
  }, []);

  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        spaceBetween={30}
        speed={1000}
        autoplay={{
          delay: 4800,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper md:h-[350px] h-full w-full object-cover overflow-hidden">
        {test &&
          test.map((item, index) => (
            <SwiperSlide
              className="flex items-center justify-center h-full w-full object-cover"
              key={index}>
              <div className="swiper-slide ">
                <blockquote className="flex flex-col items-start justify-between h-full w-full md:p-10 p-5 backdrop-blur-xl bg-white bg-opacity-5 rounded-2xl">
                  <div className="mt-4 flex flex-col items-start justify-start">
                    <p className="text-base font-extralight italic text-slate-200 text-justify capitalize tracking-wider leading-7">
                      “ {item.description}. ”
                    </p>

                    <h5 className="text-xl self-start mt-4 font-bold text-blue-600 sm:text-3xl capitalize tracking-widest">
                      —{item.name}.
                    </h5>
                  </div>

                  <strong className="mt-8 text-gray-300 font-medium text-sm tracking-widest">
                    {new Date(item.createdAt).toLocaleString("default", {
                      dateStyle: "full",
                    })}
                  </strong>
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default EliteGamesTestimonials;
