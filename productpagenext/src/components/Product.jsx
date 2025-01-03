"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ImageDisplay from "./ImageDisplay.jsx";
import "react-medium-image-zoom/dist/styles.css";
import "tailwindcss/tailwind.css";
import ReviewRating from "@/components/ReviewRating";
import price from "/public/productPrice.json";

const Product = () => {
  const [imageData, setImageData] = useState([]);
  const [productPrice, setProductPrice] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [colour, setColour] = useState("1L");
  const colors = ["1L", "5L"];
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch(`/imageData_${colour}.json`) // Fetch dynamic image data based on color
      .then((response) => response.json())
      .then((data) => setImageData(data))
      .catch((error) => console.error("Error fetching image data:", error));
  }, [colour]); // Trigger when 'colour' changes

  useEffect(() => {
    fetch("/productPrice.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.price) {
          setProductPrice(data.price);
        }
      })
      .catch((error) => {
        console.error("Error fetching price:", error);
      });
  }, []);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImageIndex(null);
  };

  const handleColorChange = (color) => {
    setColour(color);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 px-4 md:px-8 md:mt-5">
      <div className="flex justify-center items-center">
        <Swiper
          modules={[Pagination]}
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          loop={imageData.length > 1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { pagination: { clickable: true } },
            641: { pagination: false },
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
        <div className="flex flex-col gap-5 px-4 sm:px-6 md:px-8 lg:px-10">
          <h1 className="underline hover:no-underline cursor-pointer text-sm sm:text-md lg:text-lg font-bold">
            My product series
          </h1>
          <div className={``}>
            {imageData.map((item, index) => (
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold"
                key={index}
              >
                {item.id === 1 && item.title}
              </h1>
            ))}
          </div>
          <div className={`mb-5`}>
            {imageData.map((item, index) => (
              <p
                className="text-sm sm:text-base lg:text-lg text-gray-600 h-0"
                key={index}
              >
                {item.id === 1 && item.subtitle}
              </p>
            ))}
          </div>

          <div>
            <ReviewRating />
          </div>
          {price.map((item, index) => (
            <p className="text-lg sm:text-xl lg:text-2xl font-bold" key={index}>
              ₹ {item.price}
            </p>
          ))}

          <div className="flex gap-5">
            {colors.map((color) => (
              <label
                key={color}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="color"
                  value={color}
                  checked={colour === color}
                  onChange={() => handleColorChange(color)}
                  className="hidden"
                />
                {color}
                <span
                  className={`w-6 h-6 rounded-full border-2 ${
                    colour === color
                      ? "border-black bg-black"
                      : "border-gray-400"
                  }`}
                  style={{
                    backgroundColor: color.toLowerCase(),
                  }}
                ></span>
              </label>
            ))}
          </div>
        </div>
        <div className="md:mt-5 md:flex md:flex-col md:gap-5">
          <p className={`text-[#0f8503] mb-2 text-center md:text-left`}>
            In stock ready to ship!
          </p>
          <div className={`flex md:gap-5 flex-col md:flex-row gap-2`}>
            <button className="w-full border-2 border-black sm:w-[80%] md:w-[60%] lg:w-[50%] py-3 text-center text-white bg-black hover:bg-white hover:text-black rounded-md duration-300 cursor-pointer">
              ADD TO CART
            </button>
            <button className="w-full border-2 border-black sm:w-[80%] md:w-[60%] lg:w-[50%] py-3 text-center text-white bg-black hover:bg-white hover:text-black rounded-md duration-300 cursor-pointer">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className={`sm:col-span-3 hidden md:flex md:mx-14`}>
          <div className={`flex gap-10 size-20 `}>
            {imageData.map((item) => {
              return (
                <img
                  src={item.image}
                  alt={item.title}
                  key={item.id}
                  onClick={() => slide(item.id - 1)}
                  className={`rounded- md cursor-pointer transition-transform duration-300 hover:scale-125`}
                />
              );
            })}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            onClick={() =>
              setSelectedImageIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imageData.length) % imageData.length,
              )
            }
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
            onClick={() =>
              setSelectedImageIndex(
                (prevIndex) => (prevIndex + 1) % imageData.length,
              )
            }
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
