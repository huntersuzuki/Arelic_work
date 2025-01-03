"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ImageDisplay from "./ImageDisplay.jsx";
import ProductDescription from "./ProductDescription.jsx";
import "react-medium-image-zoom/dist/styles.css";
import "tailwindcss/tailwind.css";

const Product = () => {
  const [imageData, setImageData] = useState([]);
  const [productPrice, setProductPrice] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch("/imageData.json")
      .then((response) => response.json())
      .then((data) => setImageData(data));
  }, []);

  useEffect(() => {
    fetch("/productPrice.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch price data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Price data received:", data);
        if (data && data.price) {
          setProductPrice(data.price);
        } else {
          throw new Error("Price not found in the data");
        }
      })
      .catch((error) => {
        console.error("Error fetching price:", error);
        setProductPrice(null);
      });
  }, []);

  const slideTo = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const showPrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length,
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 px-4 md:px-8">
      <div className="flex justify-center items-center">
        <Swiper
          modules={[Pagination]}
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          loop={imageData.length > 1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              pagination: {
                clickable: true,
              },
            },
            641: {
              pagination: false,
            },
          }}
          className="w-full max-w-[20rem] h-[15rem] sm:max-w-[25rem] sm:h-[20rem] md:max-w-[30rem] md:h-[25rem]"
        >
          {imageData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain w-full h-full cursor-pointer"
                  onClick={() => handleImageClick(index)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-6 sm:mt-0">
        <ProductDescription />
      </div>

      <div className="sm:col-span-3 hidden md:flex md:mx-14">
        <ImageDisplay data={imageData} slide={slideTo} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            onClick={showPrevImage}
            className="absolute left-5 text-white text-2xl font-bold"
          >
            &#8592;
          </button>
          <img
            src={imageData[selectedImageIndex]?.image}
            alt="Fullscreen"
            className="max-w-full max-h-full transform transition-transform duration-300 scale-90 hover:scale-100"
          />
          <button
            onClick={showNextImage}
            className="absolute right-5 text-white text-2xl font-bold"
          >
            &#8594;
          </button>
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
