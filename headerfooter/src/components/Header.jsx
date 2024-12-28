import { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaSquarePhone } from "react-icons/fa6";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  const commonNavBarClasses =
    "relative text-sm border-b md:border-0 pb-2 hover:text-[#58A42A] cursor-pointer duration-300 md:after:content-[''] md:after:block md:after:h-[2px] md:after:w-0 md:after:bg-[#58A42A] md:after:transition-all md:after:duration-300 hover:after:w-full focus:text-[#58A42A]";

  const animateTopNavElements =
    "cursor-pointer duration-300 md:after:content-[''] md:after:block md:after:h-[2px] md:after:w-0 md:after:bg-white md:after:transition-all md:after:duration-300 hover:after:w-full";

  const handleToggleClick = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };

  return (
    <>
      <div className="w-full bg-[#58A42A] h-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-white text-xs py-2 px-4">
          <div className="flex ms-12 gap-2 md:ms-5 mt-1.5">
            <div className={`mt-0.5`}>
              <FaSquarePhone />
            </div>
            <p className={`text-center`}>OUR PHONE NUMBER: +91 90281 44481</p>
          </div>
          <div className="hidden md:flex justify-end space-x-5 col-span-2 md:me-10 mt-1.5">
            <p className={`${animateTopNavElements}`}>MY ACCOUNT</p>
            <p className={`${animateTopNavElements}`}>CART</p>
            <p className={`${animateTopNavElements}`}>CONTACT US</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-1">
        <div className="grid grid-cols-3 items-center">
          <div className="md:hidden">
            <i
              className="fa-solid fa-bars text-2xl"
              onClick={handleToggleClick}
            ></i>
          </div>
          <div className={`ms-8`}>
            <img
              src="https://orovita.in/cdn/shop/files/orovita-logo-final_402x.png?v=1734232432"
              alt="logo"
              className="w-12 md:hidden"
            />
          </div>
          <div className={`flex gap-5 ms-12 text-2xl md:hidden`}>
            <CiUser />
            <CiShoppingCart />
          </div>
        </div>
        <div
          className={`${
            open ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 w-[70%] h-full bg-[#0C0C0C] text-white z-50 flex flex-col items-start px-4 py-6 gap-6 transition-transform duration-500 ease-in-out`}
          onClick={(e) => e.stopPropagation()}
        >
          <i
            className="fa-solid fa-xmark text-2xl absolute top-5 right-5 cursor-pointer"
            onClick={() => setOpen(false)}
          ></i>
          <div className="flex flex-col gap-4 w-full mt-7">
            <div className="relative w-full">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              <input
                type="text"
                name="search products"
                className="w-full py-2 pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#58A42A] text-gray-700 rounded-md"
                placeholder="Search For Products"
              />
            </div>
            <p className={`${commonNavBarClasses} w-full text-left`}>HOME</p>
            <p className={`${commonNavBarClasses} w-full text-left`}>
              ABOUT US
            </p>
            <p className={`${commonNavBarClasses} w-full text-left`}>SHOP</p>
            <p className={`${commonNavBarClasses} w-full text-left`}>BLOGS</p>
            <p className={`${commonNavBarClasses} w-full text-left`}>
              CONTACT US
            </p>
            <p className={`w-full border-b pb-2 text-left`}>
              <a href="#" className="md:italic md:font-thin text-lg">
                Login / Register
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={`hidden md:grid md:grid-cols-3 md:ms-14`}>
        <ul className="text-center md:flex md:gap-8">
          <li className={`${commonNavBarClasses} text-[14px] mt-8`}>HOME</li>
          <li className={`${commonNavBarClasses} text-[14px] mt-8`}>
            ABOUT US
          </li>
          <li className={`${commonNavBarClasses} text-[14px] mt-8`}>SHOP</li>
          <li className={`${commonNavBarClasses} text-[14px] mt-8`}>BLOGS</li>
          <li className={`${commonNavBarClasses} text-[14px] mt-8`}>
            CONTACT US
          </li>
        </ul>
        <div className={`flex justify-center`}>
          <img
            src="https://orovita.in/cdn/shop/files/orovita-logo-final_402x.png?v=1734232432"
            alt="logo"
            className="w-24"
          />
        </div>
        <div className="hidden md:flex justify-end space-x-6 px-16 mt-8">
          <a
            href="#"
            className="italic font-light me-16 text-[14px] cursor-pointer duration-300 md:after:content-[''] md:after:block md:after:h-[0.5px] md:after:w-0 md:after:bg-black md:after:transition-all md:after:duration-300 hover:after:w-full"
          >
            Login / Register
          </a>
          <i className="fa-solid fa-magnifying-glass text-lg"></i>
          <i className="fa-regular fa-heart text-lg"></i>
          <i className="fa-solid fa-cart-shopping text-lg"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
