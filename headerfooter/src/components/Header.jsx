import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
const Header = () => {
  const [open, setOpen] = useState(false);
  const commonNavBarClasses =
    "relative hover:text-[#58A42A] cursor-pointer duration-300 md:after:content-[''] md:after:block md:after:h-[2px] md:after:w-0 md:after:bg-[#58A42A] md:after:transition-all md:after:duration-300 hover:after:w-full";
  const underLineAnimate =
    "after:content-[''] after:block after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  const handleToggleClick = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };

  return (
    <>
      <div className="w-full bg-[#58A42A] h-12">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-white text-xs py-2 px-4">
          <div className="flex items-cente justify-center md:ms-10 mt-1.5">
            <i className="fa-solid fa-phone me-2"></i>
            <p className={`text-center `}>OUR PHONE NUMBER: +91 90281 44481</p>
          </div>
          <div className="hidden md:flex justify-end space-x-5 col-span-2 md:me-10 mt-1.5">
            <p className={`cursor-pointer ${underLineAnimate}`}>
              <i className="fa-solid fa-user"></i> MY ACCOUNT
            </p>
            <p className={`cursor-pointer ${underLineAnimate}`}>CART</p>
            <p className={`cursor-pointer ${underLineAnimate}`}>CONTACT US</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-4">
        <div className="grid grid-cols-3 items-center">
          <div className="md:hidden">
            <i
              className="fa-solid fa-bars text-2xl"
              onClick={handleToggleClick}
            ></i>
          </div>
          <div className={`ms-[16%]`}>
            <img
              src="https://orovita.in/cdn/shop/files/orovita-logo-final_402x.png?v=1734232432"
              alt="logo"
              className="w-16 md:hidden"
            />
          </div>
          <div className={`flex gap-5 ms-8 text-3xl md:hidden `}>
            <CiUser />
            <CiShoppingCart />
          </div>
        </div>
        <div
          className={`${
            open ? "-translate-x-0" : "-translate-x-full"
          } absolute top-0 left-0 w-full h-screen bg-[#58A42A] text-white z-50 flex flex-col items-center justify-center gap-6 transition-transform duration-500 ease-in-out`}
          onClick={(e) => e.stopPropagation()}
        >
          <i
            className="fa-solid fa-xmark text-2xl absolute top-5 right-5 cursor-pointer"
            onClick={() => setOpen(false)}
          ></i>
          <p className={`${commonNavBarClasses} text-lg`}>HOME</p>
          <p className={`${commonNavBarClasses} text-lg`}>ABOUT US</p>
          <p className={`${commonNavBarClasses} text-lg`}>SHOP</p>
          <p className={`${commonNavBarClasses} text-lg`}>BLOGS</p>
          <p className={`${commonNavBarClasses} text-lg`}>CONTACT US</p>
          <p>
            <a href="#" className="italic font-thin text-lg">
              Login / Register
            </a>
          </p>
        </div>

        <div className={`hidden md:grid md:grid-cols-2 md:ms-14`}>
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
            {/*<li className={`text-[13px]`}>*/}
            {/*  <a href="#" className="italic font-thin">*/}
            {/*    Login / Register*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li className={`relative left-52`}>
              <img
                src="https://orovita.in/cdn/shop/files/orovita-logo-final_402x.png?v=1734232432"
                alt="logo"
                className="w-24"
              />
            </li>
          </ul>

          <div className="hidden md:flex justify-end space-x-6 px-16 mt-8">
            <a href="#" className="italic font-thin me-16 text-[13px]">
              Login / Register
            </a>
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
            <i className="fa-regular fa-heart text-lg"></i>
            <i className="fa-solid fa-cart-shopping text-lg"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
