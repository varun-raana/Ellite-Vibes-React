import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

function Gallery() {
  const [images, setImages] = useState([]);

  const URL = "https://elite-backend-1.herokuapp.com/api/events/";

  useEffect(() => {
    const allImages = [];
    const showGalleryImages = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      const result = data.data;
      const events = result.splice(0, 2);
      const eventImage = events.map((event) => event.image);

      if (result || res.status === 200) {
        eventImage.map((event) => {
          return event.map((image) => {
            return allImages.push(image);
          });
        });

        setImages(allImages);
      }
    };

    showGalleryImages();
  }, [URL]);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2800,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper md:h-[550px] h-[450px] rounded-lg w-full overflow-hidden object-cover">
        {images &&
          images.map((image, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" h-full w-full object-cover overflow-hidden">
                <img
                  src={image}
                  className="block h-full w-full object-cover"
                  alt="event images"
                  loading="lazy"
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

export default Gallery;
