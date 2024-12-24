import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SliderCard from "./SliderCard.jsx";
import { useState } from "react";

const Slider = () => {
  const [hoveredSlide, setHoveredSlide] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredSlide(index);
  };

  const handleMouseOut = () => {
    setHoveredSlide(null);
  };

  const slides = [
    {
      title: "AEROSPACE & DEFENCE",
      content:
        "The global airline industry continues to grow rapidly, but consistent and robust profitability is vague.",
      background:
        "url('https://www.arrelic.com/uploads/media/10273997471662640500.jpg')",
    },
    {
      title: "AUTOMOBILES",
      content:
        "Automobile is the most significant innovation to the mankind. It is one of the world's most important economic sectors by revenue.",
      background:
        "url('https://www.arrelic.com/uploads/media/17639471591662640500.jpg')",
    },
    {
      title: "CEMENT",
      content:
        "The Cement industry is a capital-intensive, high fixed cost proposition, the only way an organization can survive this turmoil is by adopting the right approach.",
      background:
        "url('https://www.arrelic.com/uploads/media/4553738021662698817.jpg')",
    },
    {
      title: "CHEMICAL",
      content:
        "Providing of full support to ensure maximum performance of your chemical plant.",
      background:
        "url('https://www.arrelic.com/uploads/media/15108191711662638861.jpg')",
    },
    {
      title: "FACILITY MANAGEMENT",
      content:
        "Critical Alerts for each asset Failure Analysis of Components Key Personnel associated with each asset Geographical Distribution of all assets.",
      background:
        "url('https://www.arrelic.com/uploads/media/13362851711662639286.jpg')",
    },
  ];

  return (
    <div
      className="flex justify-center items-center w-full"
      style={{
        backgroundImage:
          hoveredSlide !== null
            ? slides[hoveredSlide].background
            : "url('https://www.arrelic.com/uploads/media/10273997471662640500.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#404d60",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper md:h-[50vh] lg:h-[100vh] border-2 w-full"
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`flex flex-col items-center justify-center border-2 bg-cover bg-center ${
              hoveredSlide === index ? `bg-opacity-50 bg-black` : ""
            }`}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            <SliderCard>
              <h1
                className={`-mt-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white ${
                  hoveredSlide === index ? `-translate-y-16` : ""
                } transition-transform duration-300`}
              >
                {slide.title}
              </h1>
              <p
                className={`${
                  hoveredSlide === index ? "block -translate-y-16" : "hidden"
                } text-sm sm:text-base md:text-lg lg:text-xl text-white p-2 rounded transition-all duration-300`}
              >
                {slide.content}
              </p>
            </SliderCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
