import { useEffect, useState } from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import PropTypes from "prop-types";

const MobileMainNavBar = ({ commonNavBarClasses }) => {
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
  const handleToggleClick = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };
  return (
    <>
      <section className="">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center">
            <div className="md:hidden">
              <i
                className="fa-solid fa-bars text-2xl"
                onClick={handleToggleClick}
              ></i>
            </div>
            <div className={`ms-7`}>
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
            } fixed top-12 left-0 w-[70%] h-full bg-[#0C0C0C] text-white z-50 flex flex-col items-start px-4 py-6 gap-6 transition-transform duration-500 ease-in-out`}
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
          {/*<Breadcrumbs items={breadcrumbItems} />*/}
        </div>
      </section>
    </>
  );
};

MobileMainNavBar.propTypes = {
  commonNavBarClasses: PropTypes.string.isRequired,
};

export default MobileMainNavBar;
