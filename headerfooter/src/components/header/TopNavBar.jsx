import React from "react";
import { FaSquarePhone } from "react-icons/fa6";

const TopNavBar = () => {
  const animateTopNavElements =
    "cursor-pointer duration-300 md:after:content-[''] md:after:block md:after:h-[2px] md:after:w-0 md:after:bg-white md:after:transition-all md:after:duration-300 hover:after:w-full";
  return (
    <>
      <section className="w-full">
        <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center text-white text-xs py-2 px-4">
            <div className="flex ms-12 gap-2 md:ms-5 mt-1.5">
              <div className={`mt-0.5`}>
                <FaSquarePhone />
              </div>
              <p className={`text-center`}>OUR PHONE NUMBER: +91 90281 44481</p>
            </div>
            <div className="hidden md:flex md:justify-end space-x-5 col-span-2 mt-1.5">
              <p className={`${animateTopNavElements}`}>MY ACCOUNT</p>
              <p className={`${animateTopNavElements}`}>CART</p>
              <p className={`${animateTopNavElements}`}>CONTACT US</p>
            </div>
          </div>
          {/*<Breadcrumbs items={breadcrumbItems} />*/}
        </div>
      </section>
    </>
  );
};

export default TopNavBar;
