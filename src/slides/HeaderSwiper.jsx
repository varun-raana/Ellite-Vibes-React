import { Swiper, SwiperSlide } from "swiper/react";
import social from ".././img/social.jpg";
import footer2 from ".././img/footer2.jpg";
import footer from ".././img/footer.jpg";
import dancingPeople from ".././img/dancing-people-club.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade } from "swiper";

function HeaderSwiper() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        speed={"3000"}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper h-screen ">
        <SwiperSlide className="flex items-center justify-center bg-cover bg-center">
          <img
            className="block h-full w-full object-cover"
            src={social}
            alt="eventImage"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-cover bg-center">
          <img
            className="block h-full w-full object-cover"
            src={footer}
            alt="eventImage"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-cover bg-center">
          <img
            className="block h-full w-full object-cover"
            src={dancingPeople}
            alt="eventImage"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-cover bg-center">
          <img
            className="block h-full w-full object-cover"
            src={footer2}
            alt="eventImage"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeaderSwiper;
