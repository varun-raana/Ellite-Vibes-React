import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";

function Products() {
  let URL = "https://elite-backend-1.herokuapp.com/api/products";

  const swiperRef = useRef(null);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const showItems = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.data;
      const sliceProducts = result.splice(0, 6);

      setTimeout(() => {
        if (result.length > 0 || res.status === 200) {
          setItem(sliceProducts);
          setLoading(false);
        }
      }, 1200);
    };

    showItems();
  }, [URL]);

  return (
    <>
      <div className="max-w-7xl overflow-hidden mx-auto p-3">
        {loading ? (
          <div className="flex">
            <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
              <div className="h-48 rounded-t dark:bg-gray-800"></div>
              <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-700">
                <div className="w-[70px] h-6 rounded dark:bg-gray-400"></div>
                <div className="w-[120px] h-6 rounded dark:bg-gray-400"></div>
                <div className="w-3/4 h-6 rounded dark:bg-gray-400"></div>
                <div className="w-full h-6 rounded dark:bg-gray-400"></div>
              </div>
            </div>
            <div className="md:flex hidden flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
              <div className="h-48 rounded-t dark:bg-gray-800"></div>
              <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-700">
                <div className="w-[70px] h-6 rounded dark:bg-gray-400"></div>
                <div className="w-[120px] h-6 rounded dark:bg-gray-400"></div>
                <div className="w-3/4 h-6 rounded dark:bg-gray-400"></div>
                <div className="w-full h-6 rounded dark:bg-gray-400"></div>
              </div>
            </div>
            <div className="md:flex hidden flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
              <div className="h-48 rounded-t dark:bg-gray-800"></div>
              <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-700">
                <div className="w-[70px] h-6 rounded dark:bg-gray-400"></div>
                <div className="w-[120px] h-6 rounded dark:bg-gray-400"></div>
                <div className="w-3/4 h-6 rounded dark:bg-gray-400"></div>
                <div className="w-full h-6 rounded dark:bg-gray-400"></div>
              </div>
            </div>
          </div>
        ) : (
          <Swiper
            ref={swiperRef}
            speed={900}
            spaceBetween={30}
            breakpoints={{
              // when width is 540 and above
              540: {
                width: 540,
                slidesPerView: 2,
              },
              968: {
                width: 968,
                slidesPerView: 3,
              },
            }}
            className="overflow-hidden">
            {item &&
              item.length > 0 &&
              item.map((items, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="overflow-hidden flex justify-between">
                    <div className="flex flex-col w-full h-full">
                      <Link
                        to={"/products/" + items._id}
                        className="cursor-pointer ">
                        <img
                          src={
                            items.image > 1 ? items.image[1] : items.image[0]
                          }
                          alt={items.name}
                          loading="lazy"
                          className="h-[200px] w-full rounded-t-md object-cover block"
                        />
                      </Link>
                      <div className="p-3 border rounded-b-md flex flex-col items-start">
                        <div
                          className={`uppercase inline-block items-center justify-center font-[600] text-white py-1 px-2 text-[10px] mt-4 ${
                            items.status === "out of stock"
                              ? "bg-red-600"
                              : "bg-green-600"
                          } rounded text-center tracking-widest`}>
                          {items.status}
                        </div>
                        <div className="mt-2 font-[500] text-justify text-blue-700">
                          INR {parseFloat(items.price).toFixed(2)}
                        </div>
                        <div className="mt-3">
                          <Link
                            to={"/products/" + items._id}
                            className="inline-block b text-xl text-justify tracking-wider font-[700] text-gray-700 hover:text-blue-700 transition-all duration-200 ease-in capitalize">
                            {items.name}
                          </Link>
                        </div>
                        <div className="mt-1 text-justify tracking-wide font-medium text-base capitalize text-gray-800">
                          {items.description}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            <div className="flex items-center justify-center gap-3 mt-8 lg:hidden">
              <div
                id="previousButton"
                className="block cursor-pointer py-2 px-3 h-full items-center justify-center border-2 rounded-md active:scale-95 transition-all duration-300 ease-in text-blue-600 border-blue-600"
                onClick={() => swiperRef.current.swiper.slidePrev()}>
                <FaArrowLeft />
              </div>
              <div
                id="nextButton"
                className="block cursor-pointer py-2 px-3 h-full items-center justify-center border-2 rounded-md active:scale-95 transition-all duration-300 ease-in text-blue-600 border-blue-600"
                onClick={() => swiperRef.current.swiper.slideNext()}>
                <FaArrowRight />
              </div>
            </div>
          </Swiper>
        )}
      </div>
    </>
  );
}

export default Products;
