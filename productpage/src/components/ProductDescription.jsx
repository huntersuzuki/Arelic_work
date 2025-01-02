import React from "react";
import ReviewRating from "./ReviewRating.jsx";
import ColourPicker from "./ColourPicker.jsx";

const ProductDescription = () => {
  return (
    <div className="flex flex-col gap-4 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Product Series */}
      <h1 className="underline hover:no-underline cursor-pointer text-sm sm:text-md lg:text-lg font-bold">
        My product series
      </h1>

      {/* Product Name */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        MX ANYWHERE 3S
      </h1>

      {/* Product Description */}
      <p className="text-sm sm:text-base lg:text-lg text-gray-600">
        Compact Wireless Performance Mouse
      </p>

      {/* Review Rating */}
      <div>
        <ReviewRating />
      </div>

      {/* Product Price */}
      <p className="text-lg sm:text-xl lg:text-2xl font-bold">$50</p>

      {/* Colour Picker */}
      <div>
        <ColourPicker />
      </div>

      {/* Add to Cart Button */}
      <div className="mt-5">
        <p className={`text-[#0f8503] mb-2 text-center md:text-left`}>
          In stock ready to ship!
        </p>
        <button className="w-full border-2 border-black sm:w-[80%] md:w-[60%] lg:w-[50%] py-3 text-center text-white bg-black hover:bg-white hover:text-black  rounded-md duration-300 cursor-pointer">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
