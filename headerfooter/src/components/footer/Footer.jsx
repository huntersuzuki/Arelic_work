const Footer = () => {
  const commonClasses = "hover:text-white hover:underline duration-300";

  return (
    <>
      <footer className="bg-black text-white mt-5 py-8 underline-offset-8 w-full flex flex-col items-center">
        <div className="w-full max-w-7xl px-6">
          <div className="w-full">
            <ul className="flex flex-col gap-8 md:flex md:flex-row md:gap-10 md:text-sm ">
              <li className={`md:w-[100%]`}>
                <p className="relative font-bold after:block after:w-[25px] after:h-[2px] after:bg-white after:mt-1 after:duration-300 text-[16px]">
                  ABOUT THE STORE
                </p>
                <div className={`mt-5 text-[#4c4c4c] flex flex-col gap-5`}>
                  <p>
                    Orovita offers premium, eco-friendly oils with a focus on
                    quality, affordability, and sustainability. Enjoy free home
                    delivery across Mumbai and save ₹40 with our bottle reuse
                    policy. Health and environment matter!
                  </p>
                  <p>
                    <i className="fa-solid fa-location-arrow me-2"></i> Turbhe,
                    Navi-Mumbai, Maharashtra, India - 400705
                  </p>
                  <p>
                    <i className="fa-solid fa-mobile me-2"></i> Phone: +91 90281
                    44481
                  </p>
                </div>
              </li>
              <li className={`w-[50%]`}>
                <p className="relative font-bold after:block after:w-[25px] after:h-[2px] after:bg-white after:mt-1 after:duration-300 text-[16px]">
                  FEATURED PRODUCTS
                </p>
                <div className={`mt-5`}>
                  <ul className={`flex flex-col gap-2 text-[#4c4c4c]`}>
                    <li className={commonClasses}>
                      <a href="#">Edible Oil</a>
                    </li>
                    <li className={commonClasses}>
                      <a href="#">Hair Care</a>
                    </li>
                    <li className={commonClasses}>
                      <a href="#">Baby Care</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={`w-[50%]`}>
                <p className="relative font-bold after:block after:w-[25px] after:h-[2px] after:bg-white after:mt-1 after:duration-300 text-[16px]">
                  USEFUL LINKS
                </p>
                <div className={`mt-5`}>
                  <ul className={`flex flex-col gap-2 text-[#4c4c4c]`}>
                    <li className={commonClasses}>
                      <a href={`#`}>About Store</a>
                    </li>
                    <li className={commonClasses}>
                      <a href={`#`}>Contact Us</a>
                    </li>
                    <li className={commonClasses}>
                      <a href={`#`}>Latest Post</a>
                    </li>
                    <li className={commonClasses}>
                      <a href={`#`}>Privacy Policy</a>
                    </li>
                    <li className={commonClasses}>
                      <a href={`#`}>Shipping Policy</a>
                    </li>
                    <li className={commonClasses}>
                      <a href={`#`}>Return Policy</a>
                    </li>
                    <li className={commonClasses}>
                      <a href={`#`}>Terms & Condition</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className={`w-full md:w-full`}>
                <p className="relative font-bold after:block after:w-[25px] after:h-[2px] after:bg-white after:mt-1 after:duration-300 text-[16px]">
                  SUBSCRIBE NOW
                </p>
                <div className={`mt-8 flex flex-col gap-5 outline-0`}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    className="bg-black border-b outline-0 text-white"
                  />
                  <button
                    type="submit"
                    className="bg-[#58A42A] w-28 h-10 md:w-[30%] md:p-2 hover:bg-opacity-80 duration-300"
                  >
                    SIGN UP
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div className="border-t border-black my-6"></div>
          <hr className="w-[100%] h-0.5 mx-auto bg-opacity-20 bg-white border-0 rounded" />

          <div className="flex flex-col md:flex-row justify-center items-center text-gray-400 text-sm">
            <p className={` mt-5`}>
              &copy; {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
