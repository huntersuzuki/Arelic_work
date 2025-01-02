import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ImageDisplay from "./ImageDisplay.jsx";
import ProductDescription from "./ProductDescription.jsx";

const Product = () => {
  const [imageData, setImageData] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/imageData.json")
      .then((response) => response.json())
      .then((data) => setImageData(data));
  }, []);

  const slideTo = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 px-4 md:px-8">
      <div className="flex justify-center items-center">
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          loop={imageData.length > 1}
          pagination={{ clickable: true }}
          className="w-full max-w-[20rem] h-[15rem] sm:max-w-[25rem] sm:h-[20rem] md:max-w-[30rem] md:h-[25rem]"
        >
          {imageData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6 sm:mt-0">
        <ProductDescription />
      </div>

      <div className="mt-6 sm:col-span-2 hidden md:flex md:ms-40">
        <ImageDisplay data={imageData} slide={slideTo} />
      </div>
    </div>
  );
};

export default Product;
