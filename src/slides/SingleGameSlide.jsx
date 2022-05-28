import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, EffectFade, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleGameSlide() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const URL = "https://elite-backend-1.herokuapp.com/api/gameEvents/" + id;

  const [images, setImages] = useState([]);
  useEffect(() => {
    const showEventImages = async () => {
      const res = await fetch(URL);
      const data = await res.json();

      const result = data.data;
      if (res.status === 200 && result) {
        setImages(result.image);
      }

      setTimeout(() => {
        setLoading(false);
      }, 1600);
    };

    showEventImages();
  }, [URL]);

  return (
    <>
      {loading ? (
        <div className="mySwiper md:h-[550px] h-[250px] w-full bg-gray-900 animate-pulse overflow-hidden object-cover"></div>
      ) : (
        <Swiper
          slidesPerView={1}
          effect={"fade"}
          spaceBetween={30}
          loop={true}
          speed={2000}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2800,
            disableOnInteraction: true,
          }}
          modules={[Pagination, EffectFade, Autoplay]}
          className="mySwiper md:h-[550px] h-[250px] w-full overflow-hidden object-cover">
          {images &&
            images.map((item, index) => (
              <SwiperSlide
                className=" h-full w-full object-cover overflow-hidden"
                key={index}>
                <img
                  src={item}
                  className="block h-full w-full object-cover"
                  alt="event images"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
}

export default SingleGameSlide;
