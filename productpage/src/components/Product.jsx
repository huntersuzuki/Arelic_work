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
    <div className={`grid grid-cols-2 gap-16`}>
      <div className={``}>
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          loop={imageData.length > 1}
          pagination={{ clickable: true }}
          className="size-[45rem] h-[30rem]"
        >
          {imageData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className=" flex justify-center">
                <img src={item.image} alt={item.title} className=" bg-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ProductDescription />

      <div className={`ms-16 col-span-2 `}>
        <ImageDisplay data={imageData} slide={slideTo} />
      </div>
    </div>
  );
};

export default Product;
