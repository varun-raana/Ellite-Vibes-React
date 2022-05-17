import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";

function EliteVibesHeaderSlide() {
  const [images, setImages] = useState([]);
  let headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Credentials", "true");

  const URL = "https://elite-backend-1.herokuapp.com/api/events";
  useEffect(() => {
    const showImages = async () => {
      const res = await fetch(URL, {
        headers: headers,
      });

      const data = await res.json();

      const result = data.data;
      const eventImages = [];
      result.map((event) => {
        return event.image.map((image) => {
          return eventImages.push(image);
        });
      });

      if (res.status === 200) {
        setImages(eventImages);
      }
    };

    showImages();
  });

  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          speed={2000}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper flex items-center justify-center h-full md:w-full w-[400px] overflow-hidden">
          {images || images.length > 0 ? (
            images.map((image, index) => (
              <SwiperSlide
                className=" w-full flex items-center justify-center h-full"
                key={index}>
                <img
                  className="inlin-block w-full h-full object-cover"
                  src={image}
                  alt="events images"
                />
              </SwiperSlide>
            ))
          ) : (
            <>
              <div className="">no images yet</div>
            </>
          )}
        </Swiper>
      </>
    </div>
  );
}

export default EliteVibesHeaderSlide;
