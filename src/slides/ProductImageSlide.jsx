import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, EffectCards } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProductImageSlide({ URL }) {
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const showImages = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.data;

      if (res.status === 200 || result.image.length > 0) {
        setTimeout(() => {
          setImages(result.image);
        }, 1400);
      }
    };

    showImages();
  }, [URL]);

  const handleClick = () => {
    setShow(true);
  };

  const hideModel = () => {
    setShow(false);
  };

  return (
    <>
      <div>
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
              slidesPerView: 2,
            },
          }}
          className="h-full overflow-hidden w-full ">
          {images &&
            images.map((items, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="h-full w-full flex items-center justify-center overflow-hidden">
                  <img
                    onClick={handleClick}
                    src={items}
                    alt={images.name}
                    className="h-full w-full object-cover cursor-pointer hover:opacity-90 transition-all duration-200 ease"
                    loading="lazy"
                  />
                </SwiperSlide>
              );
            })}
          <div className="flex items-center justify-center gap-3 mt-8">
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

        {show && (
          <div className="bg-gray-400 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 h-full w-full flex items-center justify-center bg-opacity-90 transition-all duration-500 ease-in">
            <div
              className="fixed top-10 right-20 text-3xl font-[700] text-white cursor-pointer"
              onClick={hideModel}>
              X
            </div>
            <div className="md:w-[1000px] md:h-[550px] w-full p-4">
              <Swiper
                speed={900}
                effect={"cards"}
                navigation={true}
                centeredSlides={true}
                spaceBetween={30}
                modules={[Navigation, EffectCards]}
                className="h-full overflow-hidden w-full">
                {images &&
                  images.map((items, index) => {
                    return (
                      <SwiperSlide
                        key={index}
                        className="h-full w-full flex items-center justify-center overflow-hidden">
                        <img
                          src={items}
                          alt={images.name}
                          className="block h-full w-full object-cover"
                          loading="lazy"
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductImageSlide;
