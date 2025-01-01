import React from "react";

const ProductDescription = () => {
  return (
    <div className={`flex flex-col gap-5`}>
      <h1 className={`underline hover:no-underline cursor-pointer text-md`}>
        My product series
      </h1>
      <h1 className={`text-3xl`}>MX ANYWHERE 3S</h1>
      <p className={``}>Compact Wireless Performance Mouse</p>
      <p>$50</p>
      <div
        className={`hover:border-2 border-black w-[50%] h-[10%] text-center text-white bg-black hover:bg-white hover:text-black duration-300`}
      >
        <button className={`mt-2.5`}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDescription;
