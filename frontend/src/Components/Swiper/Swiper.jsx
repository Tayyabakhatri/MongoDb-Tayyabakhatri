import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import logo1 from "../../assets/slideLogos/angrybuchi.webp";
import logo2 from "../../assets/slideLogos/branreluaoandassociates.webp";
import logo3 from "../../assets/slideLogos/sogbuyan-logo.webp";
import logo4 from "../../assets/slideLogos/hvitality.webp";
import logo5 from "../../assets/slideLogos/slyr_games.webp";
import logo6 from "../../assets/slideLogos/lenikiko.webp";
import logo7 from "../../assets/slideLogos/mayor-aguinaldo.webp";
import logo8 from "../../assets/slideLogos/protostarter.webp";

const Swipper = () => {
  return (
    <>
      <div className=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 ">
        <h1 className="text-center font-bold text-6xl text-[#333333]"> Our Clients</h1>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={5}
          //  navigation
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {/* <SwiperSlide></SwiperSlide> */}
          <SwiperSlide>
            <img src={logo1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo8} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Swipper;
