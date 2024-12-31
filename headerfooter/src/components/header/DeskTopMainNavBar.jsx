import PropTypes from "prop-types";

const DeskTopMainNavBar = ({ commonNavBarClasses }) => {
  return (
    <>
      <section className="">
        <div className="max-w-full lg:px-8 md:grid grid-cols-3">
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
              className=" w-full italic font-light me-16 text-[14px] cursor-pointer duration-300 md:after:content-[''] md:after:block md:after:h-[0.5px] md:after:w-0 md:after:bg-black md:after:transition-all md:after:duration-300 hover:after:w-full"
            >
              Login / Register
            </a>
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
            <i className="fa-regular fa-heart text-lg"></i>
            <i className="fa-solid fa-cart-shopping text-lg"></i>
          </div>
          {/*<Breadcrumbs items={breadcrumbItems}/>*/}
        </div>
      </section>
    </>
  );
};
DeskTopMainNavBar.propTypes = {
  commonNavBarClasses: PropTypes.string.isRequired,
};
export default DeskTopMainNavBar;
