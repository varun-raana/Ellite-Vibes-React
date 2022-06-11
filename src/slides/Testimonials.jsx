import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";

function Testimonials() {
  const [test, setTest] = useState([]);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  const URL =
    "https://elite-backend-1.herokuapp.com/api/elitevibes/testimonials";

  useEffect(() => {
    const showTestimonial = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.test;
      const tests = result.splice(0, 6);
      if (res.status === 200) {
        setTest(tests);
      }

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    showTestimonial();
  });

  return (
    <>
      {loading ? (
        <div className="mySwiper flex items-start justify-center gap-5 h-full w-full object-cover overflow-hidden">
          <div className="flex items-center justify-center h-full w-full object-cover">
            <div className="swiper-slide">
              <blockquote className="flex flex-col items-start justify-between h-full w-full md:p-10 p-5 backdrop-blur-xl bg-white bg-opacity-5  rounded-2xl">
                <div className="mt-4 flex flex-col items-start justify-start">
                  <p className="h-14 w-96 animate-pulse bg-pink-700 bg-opacity-30 rounded-md"></p>

                  <div className="mt-8 h-8 w-64 animate-pulse bg-pink-700 bg-opacity-30 rounded-md"></div>
                </div>

                <strong className="mt-8 h-8 w-32 animate-pulse bg-pink-700 bg-opacity-30 rounded-md"></strong>
              </blockquote>
            </div>
          </div>
          <div className="md:flex  hidden items-center justify-center h-full w-full object-cover">
            <div className="swiper-slide">
              <blockquote className="flex flex-col items-start justify-between h-full w-full md:p-10 p-5 backdrop-blur-xl bg-white bg-opacity-5  rounded-2xl">
                <div className="mt-4 flex flex-col items-start justify-start">
                  <p className="h-14 w-96 animate-pulse bg-pink-700 bg-opacity-30 rounded-md"></p>

                  <div className="mt-8 h-8 w-64 animate-pulse bg-pink-700 bg-opacity-30 rounded-md"></div>
                </div>

                <strong className="mt-8 h-8 w-32 animate-pulse bg-pink-700 bg-opacity-30 rounded-md"></strong>
              </blockquote>
            </div>
          </div>
        </div>
      ) : (
        <Swiper
          ref={swiperRef}
          slidesPerView="auto"
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
          spaceBetween={10}
          speed={1000}
          modules={[Pagination]}
          className=" overflow-auto h-full w-full">
          {test &&
            test.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="flex flex-col items-start flex-auto justify-center backdrop-blur-md p-5 w-full bg-white bg-opacity-10 rounded">
                  <div className="mt-4">
                    <p className="text-lg italic text-slate-100 text-justify lowercase font-extralight tracking-widest">
                      <span className="text-2xl">“</span>&nbsp;
                      {item.description}.&nbsp;
                      <span className=" text-2xl">”</span>
                    </p>
                    <p className="text-xl  inline-block w-full mt-4 font-bold text-pink-600 sm:text-3xl capitalize tracking-widest flex-1">
                      —{item.name}.
                    </p>
                  </div>
                  <p className="mt-8  text-gray-300 inline-block font-medium text-sm tracking-widest">
                    {new Date(item.createdAt).toLocaleString("default", {
                      dateStyle: "full",
                    })}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div
              id="previousButton"
              className="block cursor-pointer p-3 h-full items-center justify-center border-2 rounded-full active:scale-95 transition-all duration-300 ease-in text-white border-gray-200"
              onClick={() => swiperRef.current.swiper.slidePrev()}>
              <FaArrowLeft />
            </div>
            <div
              id="nextButton"
              className="block cursor-pointer p-3 h-full items-center justify-center border-2 rounded-full active:scale-95 transition-all duration-300 ease-in text-white border-gray-200"
              onClick={() => swiperRef.current.swiper.slideNext()}>
              <FaArrowRight />
            </div>
          </div>
        </Swiper>
      )}
    </>
  );
}

export default Testimonials;
