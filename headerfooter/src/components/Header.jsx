import { useState } from "react";

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
      <div className={`w-full bg-[#58A42A]`}>
        <ul className={`items-center flex text-white w-full`}>
          <li className={`ms-14 md:ms-10 flex w-full`}>
            <p className={`text-white text-xs py-2`}>
              <i className="fa-solid fa-phone text-xs me-2"></i>
              OUR PHONE NUMBER: +91 90281 44481
            </p>
          </li>
          <li className={`ms-[60%] hidden md:block`}>
            <p className={`text-xs cursor-pointer ${underLineAnimate}`}>
              <i className="fa-solid fa-user"></i> MY ACCOUNT
            </p>
          </li>
          <li
            className={`ms-5 text-xs  hidden md:block cursor-pointer ${underLineAnimate}`}
          >
            CART
          </li>
          <li
            className={`ms-5 text-xs  hidden md:block cursor-pointer ${underLineAnimate}`}
          >
            CONTACT US
          </li>
        </ul>
      </div>
      <div className={`px-14`} onClick={() => open && setOpen(false)}>
        <div className="flex justify-center md:hidden">
          <img
            src="https://orovita.in/cdn/shop/files/orovita-logo-final_402x.png?v=1734232432"
            alt="logo"
            className="size-12 md:size-20"
          />
        </div>
        <div className={`md:hidden`}>
          <i
            className="fa-solid fa-bars text-2xl -ms-9 md:hidden mt-5"
            onClick={handleToggleClick}
          ></i>
        </div>
        <ul
          className={`gap-10  md:flex md:flex-row md:ms-[50px] ${!open ? "-ms-52 flex flex-col mt-8" : "flex flex-col mt-8 mx-0"} duration-300`}
          onClick={() => event.stopPropagation()}
        >
          <li className={commonNavBarClasses}>HOME</li>
          <li className={commonNavBarClasses}>ABOUT US</li>
          <li className={commonNavBarClasses}>SHOP</li>
          <li className={commonNavBarClasses}>BLOGS</li>
          <li className={commonNavBarClasses}>CONTACT US</li>
          <li>
            <div className="md:flex md:justify-center md:ms-28 hidden">
              <img
                src="https://orovita.in/cdn/shop/files/orovita-logo-final_402x.png?v=1734232432"
                alt="logo"
                className="size-12 md:size-16"
              />
            </div>
          </li>
          <li
            className={`ms-[0%] md:ms-64  after:content-[''] after:block after:h-[1px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full`}
          >
            <a href={`#`} className={`md:italic md:font-thin`}>
              Login / Register
            </a>
          </li>
          <li className={`hidden md:block`}>
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </li>
          <li className={`hidden md:block`}>
            <i className="fa-regular fa-heart text-lg"></i>
          </li>
          <li className={`hidden md:block`}>
            <i className="fa-solid fa-cart-shopping text-lg"></i>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
